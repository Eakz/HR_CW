// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

function nearestSq(n) {
    let pos = n,
        neg = n;
    const checkSquare = num => {
        return Number.isInteger(Math.sqrt(num));
    };
    while (true) {
        if (checkSquare(pos)) {
            return pos;
        }
        if (checkSquare(neg)) {
            return neg;
        }
        pos++;
        neg--;
    }
}
// Best solution
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;

    describe('Find Nearest square number', () => {
        it('Sample tests', () => {
            assert.strictEqual(nearestSq(1), 1, 'nearestSq(1) = 1');
            assert.strictEqual(nearestSq(2), 1, 'nearestSq(2) = 1');
            assert.strictEqual(nearestSq(10), 9, 'nearestSq(10) = 9');
            assert.strictEqual(nearestSq(111), 121, 'nearestSq(111) = 121');
            assert.strictEqual(nearestSq(9999), 10000, 'nearestSq(9999) = 10000');
        });
    });
} else {
    console.log(nearestSq(1), 1, 'nearestSq(1) = 1');
    console.log(nearestSq(2), 1, 'nearestSq(2) = 1');
    console.log(nearestSq(10), 9, 'nearestSq(10) = 9');
    console.log(nearestSq(111), 121, 'nearestSq(111) = 121');
    console.log(nearestSq(9999), 10000, 'nearestSq(9999) = 10000');
}
