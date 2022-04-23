// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
function binToDec(bin) {
    return parseInt(bin, 2);
}
if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Example Tests', () => {
        [
            ['1', 1],
            ['0', 0],
            ['1001001', 73],
        ].forEach(([inp, exp]) => Test.equal(binToDec(inp), exp));
    });
} else {
    console.log(binToDec('1'), 1);
    console.log(binToDec('0'), 0);
    console.log(binToDec('1001001'), 73);
}
