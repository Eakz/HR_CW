// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript

const isDivisible = (n, ...rest) => rest.every(e => n % e === 0);

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(isDivisible(3, 3, 4), false);
            Test.equal(isDivisible(12, 3, 4), true);
            Test.equal(isDivisible(8, 3, 4, 2, 5), false);
        });
    });
}
