// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

const between = (a, b) =>
    Array(Math.abs(a - b) + 1)
        .fill('')
        .map((_, i) => a + i);
console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);
if (process.mainModule.path.includes('mocha')) {
    const assert = require('chai').assert
    describe('Basic tests', () => {
        it('between(1, 4)', () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
        it('between(-2, 2)', () =>
            assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
    });
}
