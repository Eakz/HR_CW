// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

function divCon(x) {
    return x.reduce((acc, e) => {
        if (typeof e === 'number') {
            return acc + e;
        } else {
            return acc - Number(e);
        }
    }, 0);
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Divide and Conquer', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(divCon([9, 3, '7', '3']), 2);
            assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
            assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
        });
    });
} else {
    console.log(divCon([9, 3, '7', '3']), 2);
    console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
    console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
}
