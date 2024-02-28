// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

// Return the nth triangular number
function triangular(n) {
    if (n < 1 ) return 0;
    
    return (n * (n + 1)) / 2;
  }
if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(triangular(2), 3);
            assert.strictEqual(triangular(4), 10);
        });
    });
} else {
    console.log(triangular(2), 3);
    console.log(triangular(4), 10);
    console.log(triangular(176845175), 15637108048812900);
}
