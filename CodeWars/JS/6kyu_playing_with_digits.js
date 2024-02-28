// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
    const leftSide = [...n.toString()].reduce((acc, e, i) => acc + e ** (p + i), 0);
    const result = leftSide / n;

    return result === (result | 0) ? result : -1;
}
console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(digPow(89, 1), 1);
            Test.equal(digPow(92, 1), -1);
            Test.equal(digPow(46288, 3), 51);
        });
    });
}
