//www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

const countPositivesSumNegatives = a =>
!(a == null || a.length == 0)
        ? a.reduce(
              (acc, e) => {
                  if (!a.filter(e=>!!e).length) {
                      return [];
                  }
                  if (e > 0) {
                      return [acc[0] + 1, acc[1]];
                  } else if (e < 0) {
                      return [acc[0], acc[1] + e];
                  }
                  return acc;
              },
              [0, 0],
          )
        : [];

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Example tests', () => {
        it('Testing for fixed test 1', () => {
            let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
            let actual = countPositivesSumNegatives(testData);
            let expected = [10, -65];
            assert.deepEqual(actual, expected);
        });

        it('Testing for fixed test 1', () => {
            let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
            let actual = countPositivesSumNegatives(testData);
            let expected = [8, -50];
            assert.deepEqual(actual, expected);
        });
    });
}
