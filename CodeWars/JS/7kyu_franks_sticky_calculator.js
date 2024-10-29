// https://www.codewars.com/kata/5900750cb7c6172207000054/train/javascript

function stickyCalc(operation, val1, val2) {
    return Math.round(eval(`${parseInt(`${Math.round(val1)}${Math.round(val2)}`)} ${operation} ${val2}`));
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            console.log('Basic tests\n');

            Test.deepEqual(stickyCalc('+', 4, 7), 54);
            Test.deepEqual(stickyCalc('-', 15, 10), 1500);
            Test.deepEqual(stickyCalc('*', 5, 5), 275);
            Test.deepEqual(stickyCalc('/', 10, 7), 15);

            // Note How numbers are rounded
            Test.deepEqual(stickyCalc('+', 4.2, 7), 54); //Output : (47) + 7 = 54
            Test.deepEqual(stickyCalc('+', 4.7, 7), 64); //Output : (57) + 7 = 54

            // Note that non-integer outputs are rounded
            Test.deepEqual(stickyCalc('/', 10, 7), 15); //Output : (107) / 7 = 15  Not 15.2857...
            // Added to prevent flooring result to pass
            Test.deepEqual(stickyCalc('/', 433, 930), 467);
        });
    });
} else {
    console.log(stickyCalc('+', 4, 7), 54);
    console.log(stickyCalc('-', 15, 10), 1500);
    console.log(stickyCalc('*', 5, 5), 275);
    console.log(stickyCalc('/', 10, 7), 15);
    console.log(stickyCalc('+', 4.2, 7), 54);
    console.log(stickyCalc('+', 4.7, 7), 64);
}
