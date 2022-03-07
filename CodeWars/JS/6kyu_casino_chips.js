// https://www.codewars.com/kata/5e0b72d2d772160011133654/train/javascript

function solve(arr) {
    const [l, m, s] = arr.sort((a, b) => b - a);
    return Math.min(s + m, Math.floor((l + m + s) / 2));
}

console.log(solve([1, 1, 1]), 1);
console.log(solve([1, 2, 1]), 2);
console.log(solve([4, 1, 1]), 2);
console.log(solve([8, 2, 8]), 9);
console.log(solve([8, 1, 4]), 5);
console.log(solve([7, 4, 10]), 10);
console.log(solve([12, 12, 12]), 18);
console.log(solve([1, 23, 2]), 3);

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    describe('Example cases', function () {
        it('basic tests', function () {
            assert.strictEqual(solve([1, 1, 1]), 1);
            assert.strictEqual(solve([1, 2, 1]), 2);
            assert.strictEqual(solve([4, 1, 1]), 2);
            assert.strictEqual(solve([8, 2, 8]), 9);
            assert.strictEqual(solve([8, 1, 4]), 5);
            assert.strictEqual(solve([7, 4, 10]), 10);
            assert.strictEqual(solve([12, 12, 12]), 18);
            assert.strictEqual(solve([1, 23, 2]), 3);
        });
    });
}
