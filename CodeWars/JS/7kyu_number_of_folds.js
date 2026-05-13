// https://www.codewars.com/kata/59cfe5b023daccfd07000048/train/javascript

const cache = new Map();

function numberOfFolds(n) {
    const cached = cache.get(n);
    if (cached) return cached;
    if (n < 2) return 0;
    const result = n.toString(2).length - 1;
    cache.set(n, result);
    return result;
}

if (require.main.path.includes('mocha')) {
    describe('Number of Folds', function () {
        const { assert } = require('chai');

        it('simple test', function () {
            assert.strictEqual(numberOfFolds(8), 3);
            assert.strictEqual(numberOfFolds(1), 0);
            assert.strictEqual(numberOfFolds(2), 1);
        });
    });
} else {
    console.log(numberOfFolds(8), 3);
    console.log(numberOfFolds(1), 0);
    console.log(numberOfFolds(2), 1);
}
