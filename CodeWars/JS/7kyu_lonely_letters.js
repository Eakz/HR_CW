// https://www.codewars.com/kata/69cda5b85599f307742ce70a/train/javascript

const countLonelyLetters = text =>
    [...text.toLowerCase().replace(/[^a-z]/g, '')].filter(
        (el, i, arr) =>
            i === arr.lastIndexOf(el) &&
            i === arr.indexOf(el) &&
            !arr.includes(String.fromCharCode(el.charCodeAt(0) - 1)) &&
            !arr.includes(String.fromCharCode(el.charCodeAt(0) + 1)),
    ).length;

if (require.main.path.includes('mocha')) {
    const assert = require('assert');

    describe('countLonelyLetters', function () {
        it('should handle basic examples', function () {
            assert.strictEqual(countLonelyLetters('ad'), 2);
            assert.strictEqual(countLonelyLetters('abc'), 0);
            assert.strictEqual(countLonelyLetters('Hello, World!'), 3);
            assert.strictEqual(countLonelyLetters('A-dA'), 1);
            assert.strictEqual(countLonelyLetters('zz'), 0);
        });

        it('should handle edge cases', function () {
            assert.strictEqual(countLonelyLetters(''), 0);
            assert.strictEqual(countLonelyLetters('123 !!!'), 0);
            assert.strictEqual(countLonelyLetters('bdfhj'), 5);
            assert.strictEqual(countLonelyLetters('a'), 1);
            assert.strictEqual(countLonelyLetters('z'), 1);
            assert.strictEqual(countLonelyLetters('iiiaii`ii'), 1);
            assert.strictEqual(countLonelyLetters('iiiziii{iii'), 1);
            assert.strictEqual(countLonelyLetters('iiiAiii@ii'), 1);
            assert.strictEqual(countLonelyLetters('iiiZiii[iii'), 1);
        });

        it('should ignore case and non-letters', function () {
            assert.strictEqual(countLonelyLetters('Aa'), 0);
            assert.strictEqual(countLonelyLetters('B!d'), 2);
            assert.strictEqual(countLonelyLetters('C-c?e'), 1);
        });
    });
} else {
    console.log(countLonelyLetters('ad'), 2);
    console.log(countLonelyLetters('abc'), 0);
    console.log(countLonelyLetters('Hello, World!'), 3);
    console.log(countLonelyLetters('A-dA'), 1);
    console.log(countLonelyLetters('zz'), 0);
    console.log(countLonelyLetters(''), 0);
    console.log(countLonelyLetters('123 !!!'), 0);
    console.log(countLonelyLetters('bdfhj'), 5);
    console.log(countLonelyLetters('a'), 1);
    console.log(countLonelyLetters('z'), 1);
    console.log(countLonelyLetters('iiiaii`ii'), 1);
    console.log(countLonelyLetters('iiiziii{iii'), 1);
    console.log(countLonelyLetters('iiiAiii@ii'), 1);
    console.log(countLonelyLetters('iiiZiii[iii'), 1);
    console.log(countLonelyLetters('Aa'), 0);
    console.log(countLonelyLetters('B!d'), 2);
    console.log(countLonelyLetters('C-c?e'), 1);
}
