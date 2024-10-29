const getNumbers = (numbers, target, result = [], cache = {}) => {
    if (cache[target]) return cache[target];
    if (!target) return result;
    if (target < 0) return [];
  
    for (let n of numbers) {
      const check = getNumbers(numbers, target - n, [...result, n], cache);
      cache[target - n] = check;
      if (check.length) return check;
    }
    return [];
  };

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    const numbers = [100, 25, 15, 7, 3];

    describe('Static tests', () => {
        it(`given numbers = [${numbers.join`, `}] and target = 24`, () => {
            assert.deepEqual(getNumbers(numbers, 24), [15, 3, 3, 3]);
        });
        it(`given numbers = [${numbers.join`, `}] and target = 53`, () => {
            assert.deepEqual(getNumbers(numbers, 53), [25, 25, 3]);
        });
        it(`given numbers = [${numbers.join`, `}] and target = 35`, () => {
            assert.deepEqual(getNumbers(numbers, 35), [25, 7, 3]);
        });
        it(`given numbers = [${numbers.join`, `}] and target = 107`, () => {
            assert.deepEqual(getNumbers(numbers, 107), [100, 7]);
        });
        it(`given numbers = [${numbers.join`, `}] and target = 57`, () => {
            assert.deepEqual(getNumbers(numbers, 57), [25, 25, 7]);
        });
        it(`given numbers = [${numbers.join`, `}] and target = 301`, () => {
            assert.deepEqual(
                getNumbers(numbers, 301),
                [100, 100, 25, 25, 25, 7, 7, 3, 3, 3, 3],
            );
        });
        it(`given numbers = [${[35, 20, 7].join`, `}] and target = 81`, () => {
            assert.deepEqual(getNumbers([35, 20, 7], 81), [20, 20, 20, 7, 7, 7]);
        });
        it(`given numbers = [${numbers.join`, `}] and target = 4`, () => {
            assert.deepEqual(getNumbers(numbers, 4), []);
        });
        it(`given numbers = [${[10, 8, 6, 4, 2].join`, `}] and target = 9999`, () => {
            assert.deepEqual(getNumbers([10, 8, 6, 4, 2], 9999), []);
        });
    });
} else {
    const numbers = [100, 25, 15, 7, 3];
    console.log(getNumbers(numbers, 24), [15, 3, 3, 3]);
}
