// https://www.codewars.com/kata/55905b7597175ffc1a00005a/train/javascript

function pageDigits(pages) {
    let [res, i] = [0n, 1n];
    while (i <= pages) {
        res += pages - i + 1n;
        i *= 10n;
    }
    return res;
}
const { assert } = require("chai");

console.log(assert.equal(pageDigits(4n), 4n));
console.log(assert.equal(pageDigits(12n), 15n));
console.log(assert.equal(pageDigits(100n), 192n));