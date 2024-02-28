// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript

const stantonMeasure = a => {
    const count = a.reduce((acc, e) => (e === 1 ? acc + 1 : acc), 0);
    return a.reduce((acc, e) => (e === count ? acc + 1 : acc), 0);
};

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Tests', () => {
        it('test', () => {
            assert.deepEqual(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]), 3);
        });
    });
} else {
    console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]), 3);
    console.log(
        stantonMeasure([
            -13, 1, 2, 1, 4, 1, -10, 1, 3, 1, 4, 1, 13, 1, -13, 1, -9, 1, 7, 1,
        ]),
        0,
    );
}
