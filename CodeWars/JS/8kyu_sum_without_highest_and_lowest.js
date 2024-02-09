// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    if (!array || array?.length < 3) return 0;
    let min, max;
    return (
        array.reduce((acc, e) => {
            if (e > max || typeof max === 'undefined') max = e;
            if (e < min || typeof min === 'undefined') min = e;
            return acc + e;
        }, 0) -
        min -
        max
    );
}

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    it('example tests', () => {
        assert.strictEqual(sumArray(null), 0);
        assert.strictEqual(sumArray([]), 0);
        assert.strictEqual(sumArray([3]), 0);
        assert.strictEqual(sumArray([3, 5]), 0);
        assert.strictEqual(sumArray([6, 2, 1, 8, 10]), 16);
        assert.strictEqual(sumArray([0, 1, 6, 10, 10]), 17);
        assert.strictEqual(sumArray([-6, -20, -1, -10, -12]), -28);
        assert.strictEqual(sumArray([-6, 20, -1, 10, -12]), 3);
    });
} else {
    console.log(sumArray(null), 0);
    console.log(sumArray([]), 0);
    console.log(sumArray([3]), 0);
    console.log(sumArray([3, 5]), 0);
    console.log(sumArray([6, 2, 1, 8, 10]), 16);
    console.log(sumArray([0, 1, 6, 10, 10]), 17);
    console.log(sumArray([-6, -20, -1, -10, -12]), -28);
    console.log(sumArray([-6, 20, -1, 10, -12]), 3);
}
