// https://www.codewars.com/kata/5710a50d336aed828100055a/train/javascript
function sc(screws) {
    let time = 0;
    for (let i = 0; i < screws.length; i++) {
        time += 1;
        if (i + 1 < screws.length) {
            time += 1;
            if (screws[i] !== screws[i + 1]) {
                time += 5;
            }
        }
    }
    return time;
}
if (require.main.path.includes('mocha')) {
    describe('tests', function () {
        const { assert } = require('chai');
        function doTest(input, expected) {
            const message = `for screws = "${input}"\n`;
            const actual = sc(input);
            assert.strictEqual(actual, expected, message);
        }

        it('sample tests', function () {
            doTest('---+++', 16);
            doTest('-+-+-+', 36);
            doTest('-+-+-----------', 49);
            doTest('-+-+-++++++++++', 54);
        });
    });
} else {
    console.log(sc('---+++'), 16);
    console.log(sc('-+-+-+'), 36);
    console.log(sc('-+-+-----------'), 49);
    console.log(sc('-+-+-++++++++++'), 54);
}
