// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    while(begin <= end) {
        sum += begin;
        begin += step;
    }
    return sum;
};

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(sequenceSum(2, 6, 2), 12);
            assert.strictEqual(sequenceSum(1, 5, 1), 15);
            assert.strictEqual(sequenceSum(1, 5, 3), 5);
        });
    });
} else {
    console.log(sequenceSum(2, 6, 2), 12);
    console.log(sequenceSum(1, 5, 1), 15);
    console.log(sequenceSum(1, 5, 3), 5);
}
