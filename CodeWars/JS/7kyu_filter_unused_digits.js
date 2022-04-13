// https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript

function unusedDigits(...props) {
    return props.reduce((acc, e) => {
        const regex = new RegExp(`[${e}]`, 'g');
        return acc.replace(regex, '');
    }, '0123456789');
}
// Minified
unusedDigits=(...a)=>'0123456789'.replace(new RegExp('['+a+']','g'),'')


if (process.mainModule.path.includes('mocha')) {
    const { assert } = require('chai');

    it('example tests', () => {
        assert.strictEqual(unusedDigits(12, 34, 56, 78), '09');
        assert.strictEqual(unusedDigits(2015, 8, 26), '3479');
    });
} else {
    console.log(unusedDigits(12, 34, 56, 78), '09');
    console.log(unusedDigits(2015, 8, 26), '3479');
}
