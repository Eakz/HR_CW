// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits=(n)=>n.toString(2).split('').reduce((acc,e)=>+e+acc,0)

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(countBits(0), 0);
            assert.strictEqual(countBits(4), 1);
            assert.strictEqual(countBits(7), 3);
            assert.strictEqual(countBits(9), 2);
            assert.strictEqual(countBits(10), 2);
        });
    });
} else {
    console.log(countBits(0), 0);
    console.log(countBits(4), 1);
    console.log(countBits(7), 3);
    console.log(countBits(9), 2);
    console.log(countBits(10), 2);
}
