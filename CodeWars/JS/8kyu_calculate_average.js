// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
    if (!array.length) return 0;
    return array.reduce((acc, e) => acc + e, 0) / array.length;
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(findAverage([1, 1, 1]), 1);
            assert.strictEqual(findAverage([1, 2, 3]), 2);
            assert.strictEqual(findAverage([1, 2, 3, 4]), 2.5);
        });
    });
} else {
    console.log(findAverage([1, 1, 1]), 1);
    console.log(findAverage([1, 2, 3]), 2);
    console.log(findAverage([1, 2, 3, 4]), 2.5);
}
