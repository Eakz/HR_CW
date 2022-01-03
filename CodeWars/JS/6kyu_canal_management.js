// https://www.codewars.com/kata/61c1ffd793863e002c1e42b5/train/javascript
const chai = require("chai");
const canalMania = (lq,hq,ll)=>{
    let time=0;
    const getFullLoad = (q)=>{
        let load=0;
        while(load+q[0]<=ll&&!!q.length){
            load+=q.shift()
        }
        return load*2+2
    }
    while(lq.length||hq.length){
        let lqLoad=getFullLoad(lq)
        time+=lqLoad
        let hqLoad=getFullLoad(hq)
        time+=hqLoad
        
    }
    return time
}

const assert = chai.assert;

describe("Example Tests", function() {
  it('The given example', function() {
    assert.deepEqual(canalMania([2, 3, 6, 1], [1, 2], 7), 38);
  });
  it('No high queue', function() {
    assert.deepEqual(canalMania([4, 1, 8, 2, 6], [], 8), 54);
  });
  it('No low queue', function() {
    assert.deepEqual(canalMania([], [4, 4, 7, 2, 8, 5], 8), 80);
  });
  it('No queues', function() {
    assert.deepEqual(canalMania([], [], 10), 0);
  });
  it('A longer queue', function() {
    assert.deepEqual(canalMania([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 30), 868);
  });
});