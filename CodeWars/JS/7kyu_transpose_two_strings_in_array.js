// https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript

const transposeTwoStrings = array => {
    const length = Math.max(...array.map(e => e.length));
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(array.map(e => e[i] || ' ').join(' '));
    }
    return result.join('\n');
};
if (process.mainModule.path.includes('mocha')) {
    const strictEqual = require('chai').assert.strictEqual;

    function doTest(array, expected) {
        const log = `for array :\n["${array[0]}", "${array[1]}"]\n`;
        const actual = transposeTwoStrings(array);
        strictEqual(actual, expected, log);
    }

    describe('Tests suite', function () {
        it('sample tests', function () {
            doTest(['Hello', 'World'], 'H W\ne o\nl r\nl l\no d');
            doTest(['joey', 'louise'], 'j l\no o\ne u\ny i\n  s\n  e');
            doTest(['a', 'cat'], 'a c\n  a\n  t');
            doTest(['cat', ''], 'c  \na  \nt  ');
            doTest(['!a!a!', '?b?b'], '! ?\na b\n! ?\na b\n!  ');
        });
    });
} else {
    console.log(transposeTwoStrings(['Hello', 'World']), 'H W\ne o\nl r\nl l\no d');
    console.log(transposeTwoStrings(['joey', 'louise']), 'j l\no o\ne u\ny i\n  s\n  e');
    console.log(transposeTwoStrings(['a', 'cat']), 'a c\n  a\n  t');
    console.log(transposeTwoStrings(['cat', '']), 'c  \na  \nt  ');
    console.log(transposeTwoStrings(['!a!a!', '?b?b']), '! ?\na b\n! ?\na b\n!  ');
}
