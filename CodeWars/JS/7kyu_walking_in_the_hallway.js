// https://www.codewars.com/kata/6368426ec94f16a1e7e137fc/train/javascript

// Brute force reproduction
const contact = h => {
    const left = '>';
    const right = '<';
    const distances = [];
    for (let i = 0; i < h.length; i++) {
        if (h[i] === left) {
            // Search for right
            for (let r = i + 1; r < h.length; r++) {
                if (h[r] === right) {
                    distances.push(r - i);
                }
            }
        }
        if (h[i] === right) {
            // Search for left
            for (let l = i - 1; l >= 0; l--) {
                if (h[l] === left) {
                    distances.push(i - l);
                }
            }
        }
    }
    return distances.length ? Math.ceil(Math.min(...distances) / 2) : -1;
};

// regex option
function contact(hallway) {
    const gaps = hallway.match(/>-*</g);
    return !gaps ? -1 : Math.min(...gaps.map(s => s.length)) >> 1;
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;

    describe('Tests', function () {
        it('Basic tests', function () {
            assert.strictEqual(contact('---->---<'), 2);
            assert.strictEqual(contact('----<-->---'), -1);
            assert.strictEqual(contact('----><-----'), 1);
            assert.strictEqual(contact('>>>>--<<<<<<<<<<<<<<<<<<<<'), 2);
            assert.strictEqual(
                contact(
                    '>---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>',
                ),
                5,
            );
        });
    });
} else {
    console.log(contact('---->---<'), 2);
    console.log(contact('----<-->---'), -1);
    console.log(contact('----><-----'), 1);
    console.log(contact('>>>>--<<<<<<<<<<<<<<<<<<<<'), 2);
    // console.log(
    //     contact(
    //         '>---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>',
    //     ),
    //     5,
    // );
}
