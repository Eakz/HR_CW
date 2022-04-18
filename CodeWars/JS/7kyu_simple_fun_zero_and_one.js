// https://www.codewars.com/kata/58ad09d6154165a1c80000d1/train/javascript

function zeroAndOne(s) {
    return s.replace(/01|10/g, '').length;
}

if (process.mainModule.path.includes('mocha')) {
    const strictEqual = require('chai').assert.strictEqual;

    function doTest(input, expected) {
        const actual = zeroAndOne(input);
        strictEqual(actual, expected, `for string:\n"${input}"\n`);
    }

    describe('Tests suite', function () {
        it('It should work for basic tests.', function () {
            doTest('01010', 1);
            doTest('11101111', 6);
            doTest('01', 0);
            doTest('10', 0);
            doTest('110110', 2);
            doTest('110100', 2);
        });
    });
} else {
    console.log(zeroAndOne('01010'), 1);
    console.log(zeroAndOne('11101111'), 6);
    console.log(zeroAndOne('01'), 0);
    console.log(zeroAndOne('10'), 0);
    console.log(zeroAndOne('110110'), 2);
    console.log(zeroAndOne('110100'), 2);
}
