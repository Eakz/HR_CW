// 1. Toggle a bit at a given position
const toggleBit = (n, position) => n ^ (1 << position);

// 2. Set a bit at a given position
const setBit = (n, position) => n | (1 << position);

// 3. Clear a bit at a given position
const clearBit = (n, position) => n & ~(1 << position);

// 4. Check if a bit at a given position is set
const isBitSet = (n, position) => (n & (1 << position)) !== 0;

// 5. Set multiple bits using a mask
const setMultipleBits = (n, mask) => n | mask;

// 6. Clear multiple bits using a mask
const clearMultipleBits = (n, mask) => n & ~mask;

// 7. Toggle multiple bits using a mask
const toggleMultipleBits = (n, mask) => n ^ mask;

if (require.main.path.includes('mocha')) {
    const assert = require('chai').assert;

    describe('toggleBit', function () {
        it('toggles a single bit', function () {
            assert.strictEqual(toggleBit(5, 1), 7);
        });
    });

    describe('setBit', function () {
        it('sets a single bit', function () {
            assert.strictEqual(setBit(5, 1), 7);
        });
    });

    describe('clearBit', function () {
        it('clears a single bit', function () {
            assert.strictEqual(clearBit(7, 1), 5);
        });
    });

    describe('isBitSet', function () {
        it('checks whether a bit is set', function () {
            assert.strictEqual(isBitSet(5, 0), true);
        });
    });

    describe('setMultipleBits', function () {
        it('sets multiple bits', function () {
            assert.strictEqual(setMultipleBits(5, 3), 7);
        });
    });

    describe('clearMultipleBits', function () {
        it('clears multiple bits', function () {
            assert.strictEqual(clearMultipleBits(7, 2), 5);
        });
    });

    describe('toggleMultipleBits', function () {
        it('toggles multiple bits', function () {
            assert.strictEqual(toggleMultipleBits(5, 3), 6);
        });
    });
} else {
    // console.log(toggleBit(5, 1), 7);
    // console.log(toggleBit(1133616749, 21), 1135713901);
    console.log(toggleBit(2100876241, 31), -46607407);
    // console.log(setBit(5, 1), 7);
    // console.log(clearBit(7, 1), 5);
    // console.log(isBitSet(5, 0), true);
    // console.log(setMultipleBits(5, 3), 7);
    // console.log(clearMultipleBits(7, 2), 5);
    // console.log(toggleMultipleBits(5, 3), 6);
}
