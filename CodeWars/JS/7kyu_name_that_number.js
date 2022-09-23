// https://www.codewars.com/kata/579ba41ce298a73aaa000255/train/javascript
const nameThatNumber = n => {
    A =
        'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
            ' ',
        );
    B = '  twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
    return A[n] || B[(n / 10) | 0] + (n % 10 ? ' ' + A[n % 10] : '');
};
if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Basic Tests', function () {
        it('1', function () {
            assert.strictEqual(nameThatNumber(1), 'one');
        });
        it('52', function () {
            assert.strictEqual(nameThatNumber(52), 'fifty two');
        });
        it('21', function () {
            assert.strictEqual(nameThatNumber(21), 'twenty one');
        });
        it('99', function () {
            assert.strictEqual(nameThatNumber(99), 'ninety nine');
        });
        it('0', function () {
            assert.strictEqual(nameThatNumber(0), 'zero');
        });
        it('53', function () {
            assert.strictEqual(nameThatNumber(53), 'fifty three');
        });
        it('23', function () {
            assert.strictEqual(nameThatNumber(23), 'twenty three');
        });
        it('76', function () {
            assert.strictEqual(nameThatNumber(76), 'seventy six');
        });
    });
} else {
    console.log(nameThatNumber(1), 'one');
    console.log(nameThatNumber(52), 'fifty two');
    console.log(nameThatNumber(21), 'twenty one');
    console.log(nameThatNumber(99), 'ninety nine');
    console.log(nameThatNumber(0), 'zero');
    console.log(nameThatNumber(53), 'fifty three');
    console.log(nameThatNumber(23), 'twenty three');
    console.log(nameThatNumber(76), 'seventy six');
}
