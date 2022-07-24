// https://www.codewars.com/kata/59098c39d8d24d12b6000020/train/javascript

function dot(n, m) {
    const plusLine = '+---';
    const zeroLine = '| o ';
    return (
        `${plusLine.repeat(n) + '+\n' + zeroLine.repeat(n) + '|\n'}`.repeat(m) +
        plusLine.repeat(n) +
        '+'
    );
}

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Default test cases', function () {
        it('Should work for test cases', function () {
            Test.equal(
                dot(1, 1),
                '+---+\n| o |\n+---+',
                'Should look like this: ' + print(1, 1),
            );
            Test.equal(
                dot(3, 2),
                '+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+',
                'Should look like this: ' + print(3, 2),
            );
        });
    });

    function print(n, m) {
        console.log(
            '<p style="color: red;">For width: ' + n + ' and height: ' + m + '</p>',
        );
        console.log('Your solution: ');
        console.log(dot(n, m));
    }
} else {
    console.log(dot(1, 1), '+---+\n| o |\n+---+');
    console.log(
        dot(3, 2),
        '+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+',
    );
}
