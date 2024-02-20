// https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407/train/javascript

function alphabet(ns) {
    ns = ns.sort((a,b)=> a - b);
    
    for(let i = 0; i < ns.length - 1 ; i++){
      let result = ns[i] * ns[i+1]; 
      let idx = ns.indexOf(result);
      if(idx !== -1){
        ns.splice(idx,1);
      }
    }
    return ns[3];
  }

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('The alphabet product', function () {
        it('example tests ( d < 21 )', function () {
            assert.strictEqual(alphabet([2, 3, 4, 1, 12, 6, 2, 4]), 4);
            assert.strictEqual(alphabet([2, 6, 7, 3, 14, 35, 15, 5]), 7);
            assert.strictEqual(alphabet([20, 10, 6, 5, 4, 3, 2, 12]), 5);
            assert.strictEqual(alphabet([2, 6, 18, 3, 6, 7, 42, 14]), 7);
            assert.strictEqual(alphabet([7, 96, 8, 240, 12, 140, 20, 56]), 20);
            assert.strictEqual(alphabet([20, 30, 6, 7, 4, 42, 28, 5]), 7);
        });
    });
} else {
    console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4]), 4);
    console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5]), 7);
    console.log(alphabet([20, 10, 6, 5, 4, 3, 2, 12]), 5);
    console.log(alphabet([2, 6, 18, 3, 6, 7, 42, 14]), 7);
    console.log(alphabet([7, 96, 8, 240, 12, 140, 20, 56]), 20);
    console.log(alphabet([20, 30, 6, 7, 4, 42, 28, 5]), 7);
}
