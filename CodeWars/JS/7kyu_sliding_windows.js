// https://www.codewars.com/kata/671fd30696d3f42285f7d1f1

function window(length, offset, list) {
    const lists = [];
    for (var i = 0, end = list.length - length; i <= end; i += offset)
      lists.push(list.slice(i, i + length));
    return lists;
  }

if (require.main.path.includes('mocha')) {
    const {assert,config} = require("chai"); config.truncateThreshold = 0;

    describe("Sliding windows", function() {
      it("description example tests", function() {
        assert.deepEqual( window(2,1,[0,1,2,3,4]), [ [0,1], [1,2], [2,3], [3,4] ], `window(2,1,[0,1,2,3,4])` );
        assert.deepEqual( window(2,2,[0,1,2,3,4]), [ [0,1], [2,3] ], `window(2,2,[0,1,2,3,4])` );
        assert.deepEqual( window(2,3,[0,1,2,3,4]), [ [0,1], [3,4] ], `window(2,3,[0,1,2,3,4])` );
      });
      it("more example tests", function() {
        assert.deepEqual( window(3,1,[0,1,2]), [ [0,1,2] ], `window(3,1,[0,1,2])` );
        assert.deepEqual( window(2,1,[0,1,2]), [ [0,1], [1,2] ], `window(2,1,[0,1,2])` );
        assert.deepEqual( window(1,1,[0,1,2]), [ [0], [1], [2] ], `window(1,1,[0,1,2])` );
        assert.deepEqual( window(0,1,[0,1,2]), [ [], [], [], [] ], `window(0,1,[0,1,2])` );
      });
    });
}else{
    console.log( window(2,1,[0,1,2,3,4]), [ [0,1], [1,2], [2,3], [3,4] ], `window(2,1,[0,1,2,3,4])` );
    console.log( window(2,2,[0,1,2,3,4]), [ [0,1], [2,3] ], `window(2,2,[0,1,2,3,4])` );
    console.log( window(2,3,[0,1,2,3,4]), [ [0,1], [3,4] ], `window(2,3,[0,1,2,3,4])` );
    console.log( window(3,1,[0,1,2]), [ [0,1,2] ], `window(3,1,[0,1,2])` );
    console.log( window(2,1,[0,1,2]), [ [0,1], [1,2] ], `window(2,1,[0,1,2])` );
    console.log( window(1,1,[0,1,2]), [ [0], [1], [2] ], `window(1,1,[0,1,2])` );
    console.log( window(0,1,[0,1,2]), [ [], [], [], [] ], `window(0,1,[0,1,2])` );

}