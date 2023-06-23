// https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript

function f(x, cc) {
    const vals = Object.values(cc);
    const indexOfX = vals.indexOf(x);
    const nextIndex = (indexOfX + 1) % vals.length;
    return vals[nextIndex];
}

if (require.main.path('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Sample Tests', () => {
        it('test', () => {
            assert.strictEqual(f(3, { a: 3, b: 4, c: 5 }), 4);
            assert.strictEqual(f(4, { a: 3, b: 4, c: 5 }), 5);
            assert.strictEqual(f(5, { a: 3, b: 4, c: 5 }), 3);
        });
    });
} else {
    console.log(f(3, { a: 3, b: 4, c: 5 }), 4);
    console.log(f(4, { a: 3, b: 4, c: 5 }), 5);
    console.log(f(5, { a: 3, b: 4, c: 5 }), 3);
}
