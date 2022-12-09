// https://www.codewars.com/kata/634d0f7c562caa0016debac5/train/javascript
const hasSurvived = (atk, def) => {
    let ld = def.length - atk.length;
    for (let i = 0; i < atk.length && i < def.length; i++) {
        ld += (def[i] > atk[i]) - (def[i] < atk[i]);
    }
    return (
        ld > 0 ||
        (ld == 0 && atk.reduce((a, b) => a + b, 0) <= def.reduce((a, b) => a + b, 0))
    );
};

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;

    describe('Solution', function () {
        it('Basic Tests', function () {
            assert.strictEqual(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
            assert.strictEqual(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
            assert.strictEqual(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
            assert.strictEqual(hasSurvived([], [1, 2, 3]), true);
            assert.strictEqual(hasSurvived([1, 2, 3], []), false);
            assert.strictEqual(
                hasSurvived(
                    [32, 65, 21, 83, 85, 7, 71, 45, 20, 63],
                    [83, 44, 38, 55, 84, 80, 58, 20, 4, 74],
                ),
                false,
            );
        });
    });
} else {
    console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
    console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
    console.log(hasSurvived([], [1, 2, 3]), true);
    console.log(hasSurvived([1, 2, 3], []), false);
    console.log(
        hasSurvived(
            [32, 65, 21, 83, 85, 7, 71, 45, 20, 63],
            [83, 44, 38, 55, 84, 80, 58, 20, 4, 74],
        ),
        false,
    );
}
