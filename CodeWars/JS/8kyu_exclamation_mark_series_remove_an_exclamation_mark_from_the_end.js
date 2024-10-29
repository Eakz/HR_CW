// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

function remove(string) {
    return string.slice(-1) === '!' ? string.slice(0, -1) : string;
}

// Regex option
// const remove = s => s.replace(/!$/, '');

if (require.main.path.includes('mocha')) {
    const strictEqual = require('chai').assert.strictEqual;
    function doTest(input, expected) {
        const actual = remove(input);
        strictEqual(actual, expected, `for string:\n"${input}"\n`);
    }

    describe('Tests suite', function () {
        it('sample tests', function () {
            doTest('Hi!', 'Hi');
            doTest('Hi!!!', 'Hi!!');
            doTest('!Hi', '!Hi');
            doTest('!Hi!', '!Hi');
            doTest('Hi! Hi!', 'Hi! Hi');
            doTest('Hi', 'Hi');
        });
    });
}
