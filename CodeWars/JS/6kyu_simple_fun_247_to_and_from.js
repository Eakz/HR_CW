// https://www.codewars.com/kata/590c3173cd3b99c467000a26/train/javascript
const assert = require('chai').assert;
const toAndFrom = (a, b, t) => {
    const diff = b - a;
    const pos = t % diff;
    const post = diff < 0 ? a - pos : a + pos;
    const altpost = diff < 0 ? b + pos : b - pos;
    const isAlternate = ((t / diff) | 0) % 2 !== 0;
    return isAlternate ? altpost : post;
};

if (require.main.path.includes('mocha')) {
    describe('Basic Tests', function () {
        it('It should works for basic tests.', function () {
            assert.equal(toAndFrom(2, 4, 3), 3);

            assert.equal(toAndFrom(1, 10, 8), 9);

            assert.equal(toAndFrom(10, 4, 8), 6);

            assert.equal(toAndFrom(2, 4, 5), 3);

            assert.equal(toAndFrom(42, 150, 548), 142);

            assert.equal(toAndFrom(75, 9, 6), 69);
        });
    });
} else {
    console.log(toAndFrom(2, 4, 3), 3);
    console.log(toAndFrom(1, 10, 8), 9);
    console.log(toAndFrom(10, 4, 8), 6);
    console.log(toAndFrom(2, 4, 5), 3);
    console.log(toAndFrom(42, 150, 548), 142);
    console.log(toAndFrom(75, 9, 6), 69);
}
