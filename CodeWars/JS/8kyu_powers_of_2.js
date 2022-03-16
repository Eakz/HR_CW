// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
    return Object.keys(Array(n+1).fill('')).map(e => 2**e);
}

// Alternative solution
// function powersOfTwo(n) {
//     return Array.from({length: n + 1}, (v, k) => 2 ** k);
//   }
console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Basic Tests', function () {
        it('Testing for fixed tests', () => {
            assert.deepEqual(powersOfTwo(0), [1]);
            assert.deepEqual(powersOfTwo(1), [1, 2]);
            assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16]);
        });
    });
}
