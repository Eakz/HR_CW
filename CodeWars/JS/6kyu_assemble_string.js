// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/train/javascript

function assembleString(array = []) {
    if (!array.length) return '';
    return array
        .reduce((acc, e) => {
            return acc.map((letter, i) => (letter === '*' ? e[i] : letter));
        }, array[0].split(''))
        .map(e => (e === '*' ? '#' : e))
        .join('');
}
console.log(
    assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*']),
    'Hello, World!',
);
console.log(
    assembleString([
        ".** . .' .'' ! ! .",
        ". . . .' **' ! * .",
        "* . .*.* .'' * ! .",
        ". . .*.' .**** ! .",
        "**. * .* .*' ! ! .",
    ]),
    ". . . .' .'' ! ! .",
);
console.log(
    assembleString(['. . . .', '. . . .', '. . . .', '. . . .', '. . . .']),
    '. . . .',
);
console.log(
    assembleString([
        '12***6789',
        '**3456789',
        '12345**8*',
        '***456**9',
        '1*3*5*7*9',
        '*2*456789',
    ]),
    '123456789',
);
console.log(assembleString(['******', '******', '******', '******']), '######');
console.log(
    assembleString([
        '*#*#*#*#*#*#*#*',
        '*#*#*#*#*#*#*#*',
        '*#*#*#*#*#*#*#*',
        '*#*#*#*#*#*#*#*',
    ]),
    '###############',
);

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Sample tests', () => {
        it('Tests', () => {
            assert.strictEqual(
                assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*']),
                'Hello, World!',
            );
            assert.strictEqual(
                assembleString([
                    ".** . .' .'' ! ! .",
                    ". . . .' **' ! * .",
                    "* . .*.* .'' * ! .",
                    ". . .*.' .**** ! .",
                    "**. * .* .*' ! ! .",
                ]),
                ". . . .' .'' ! ! .",
            );
            assert.strictEqual(
                assembleString(['. . . .', '. . . .', '. . . .', '. . . .', '. . . .']),
                '. . . .',
            );
            assert.strictEqual(
                assembleString([
                    '12***6789',
                    '**3456789',
                    '12345**8*',
                    '***456**9',
                    '1*3*5*7*9',
                    '*2*456789',
                ]),
                '123456789',
            );
            assert.strictEqual(
                assembleString(['******', '******', '******', '******']),
                '######',
            );
            assert.strictEqual(
                assembleString([
                    '*#*#*#*#*#*#*#*',
                    '*#*#*#*#*#*#*#*',
                    '*#*#*#*#*#*#*#*',
                    '*#*#*#*#*#*#*#*',
                ]),
                '###############',
            );
        });
    });
}
