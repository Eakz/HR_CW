// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
    const hex = n =>
        (n < 0 ? 0 : n > 255 ? 255 : n).toString(16).padStart(2, '0').toUpperCase();
    return [r, g, b].map(hex).join('');
}
if (require.main.path.includes('mocha')) {
    describe('Tests', () => {
        const { strictEqual } = require('chai').assert;

        function doTest(r, g, b, expected) {
            const actual = rgb(r, g, b);
            const message = `for r = ${r} g = ${g} b = ${b}`;
            strictEqual(actual, expected, message);
        }

        it('Sample Tests', () => {
            doTest(0, 0, 0, '000000');
            doTest(0, 0, -20, '000000');
            doTest(300, 255, 255, 'FFFFFF');
            doTest(173, 255, 47, 'ADFF2F');
        });
    });
} else {
    console.log(rgb(0, 0, 0), '000000');
    console.log(rgb(0, 0, -20), '000000');
    console.log(rgb(300, 255, 255), 'FFFFFF');
    console.log(rgb(173, 255, 47), 'ADFF2F');
}
