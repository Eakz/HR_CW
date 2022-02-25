// https://www.codewars.com/kata/524f5125ad9c12894e00003f

function remainder(n, m) {
    return n > m ? n % m : m % n;
}

if (process.mainModule.path.includes('mocha')) {
    const assert = require('chai').assert;
    describe('Remainder Function', () => {
        it('Should handle arguments and math as defined in specificaitons', () => {
            assert.strictEqual(
                remainder(17, 5),
                2,
                'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5',
            );
            assert.strictEqual(
                remainder(13, 72),
                remainder(72, 13),
                'The order the arguments are passed should not matter',
            );
            assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
            assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');
        });
    });
}
