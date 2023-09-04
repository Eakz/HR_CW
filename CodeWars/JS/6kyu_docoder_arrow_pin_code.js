function decArrowPinCode(arrowStr) {
    const [initialDial, ...directions] = [...arrowStr];
    const dials = [[0], [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const directionsControl = {
        '→': [0, 1],
        '↑': [1, 0],
        '↓': [-1, 0],
        '←': [0, -1],
    };
    let position = [];
    for (let row = 0; row < dials.length; row++) {
        for (let column = 0; column < dials[row].length; column++) {
            const value = dials[row][column];
            if (`${initialDial}` === `${value}`) {
                position = [row, column];
                break;
            }
        }
    }
    const result = [+initialDial];

    for (let step = 0; step < directions.length; step++) {
        const currentStep = directions[step];
        if (currentStep === '*') {
            const amount = parseInt(directions[step + 1]);
            const multiple = new Array(amount);
            result.push(...multiple.fill(result[result.length - 1]));

            step++;
        } else {
            const task = directionsControl[currentStep];
            const newPosition = [position[0] + task[0], position[1] + task[1]];
            const valueAt = dials[newPosition[0]]?.[newPosition[1]];
            // Check for out of dial condition and pin length
            if (Number.isInteger(valueAt)) {
                position = newPosition;
                result.push(valueAt);
            } else {
                return [];
            }
        }
        // Check for extra length condition
        if (result.length > 4) {
            return [];
        }
    }
    return result;
}
if (require.main.path.includes('mocha')) {
    const assert = require('assert');

    describe('Basic tests', function () {
        describe('correct sequence of arrows', function () {
            it("dec_arrow_pin_code('1→↑→')  ==>  [1, 2, 5, 6]", function () {
                assert.deepStrictEqual(decArrowPinCode('1→↑→'), [1, 2, 5, 6]);
            });
            it("dec_arrow_pin_code('1*2↓')  ==>  [1, 1, 1, 0]", function () {
                assert.deepStrictEqual(decArrowPinCode('1*2↓'), [1, 1, 1, 0]);
            });
            it("dec_arrow_pin_code('0*2↑')  ==>  [0, 0, 0, 1]", function () {
                assert.deepStrictEqual(decArrowPinCode('0*2↑'), [0, 0, 0, 1]);
            });
            it("dec_arrow_pin_code('0↑↑↑')  ==>  [0, 1, 4, 7]", function () {
                assert.deepStrictEqual(decArrowPinCode('0↑↑↑'), [0, 1, 4, 7]);
            });
        });

        describe('incorrect sequence of arrows', function () {
            it("dec_arrow_pin_code('0↑↑↑↑')  ==>  []", function () {
                assert.deepStrictEqual(decArrowPinCode('0↑↑↑↑'), []);
            });
            it("dec_arrow_pin_code('8↑*5→')  ==>  []", function () {
                assert.deepStrictEqual(decArrowPinCode('8↑*5→'), []);
            });
            it("dec_arrow_pin_code('0←*2←')  ==>  []", function () {
                assert.deepStrictEqual(decArrowPinCode('0←*2←'), []);
            });
        });
    });
} else {
    console.log(decArrowPinCode('1→↑→'), [1, 2, 5, 6]);
    console.log(decArrowPinCode('1*2↓'), [1, 1, 1, 0]);
    console.log(decArrowPinCode('0*2↑'), [0, 0, 0, 1]);
    console.log(decArrowPinCode('0↑↑↑'), [0, 1, 4, 7]);
    console.log(decArrowPinCode('0↑↑↑↑'), []);
    console.log(decArrowPinCode('8↑*5→'), []);
    console.log(decArrowPinCode('0←*2←'), []);
}
