// https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript
function center(strng = '', width = 0, fill = ' ') {
    return strng.padStart(Math.ceil((width+strng.length) / 2), fill).padEnd(width, fill);
}
console.log(center('a', 3, ' '), ' a ');
console.log(center('a', 3), ' a ');
console.log(center('', 3, '_'), '___');
if (require.main.path.includes('mocha')) {
    const strictEqual = require('chai').assert.strictEqual;

    function doTest(args, expected) {
        const log =
            `for center("${args[0]}", ${args[1]}` +
            (args.length === 3 ? `, '${args[2]}')\n` : ')\n');
        const actual = center(...args);
        strictEqual(actual, expected, log);
    }

    describe('Tests suite', function () {
        it('sample tests', function () {
            doTest(['a', 3, ' '], ' a ');
            doTest(['a', 3], ' a ');
            doTest(['', 3, '_'], '___');
            doTest(['abc', 10, '_'], '____abc___');
            doTest(['____abc___', 10, '_'], '____abc___');
            doTest(['abcdefg', 2, ' '], 'abcdefg');
        });
    });
}
