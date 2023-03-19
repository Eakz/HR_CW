// https://www.codewars.com/kata/61fef3a2d8fa98021d38c4e5/train/javascript

/**
 * @param {BigInt} n
 * @return {BigInt}
 */
function cardGame(n) {
    return n === 0n ? 0n :
           n === 4n ? 3n :
           n % 4n === 2n ? n - cardGame(n / 2n) :
                           n - cardGame(n - 1n) ;
  }

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;

    describe('Fixed Tests', function () {
        let entries = [
            [10n, 8n],
            [4n, 3n],
            [5n, 2n],
            [12n, 9n],
            [100000000000n, 99999999950n],
        ];

        it('Sample Tests', function () {
            for (let [n, expected] of entries) {
                let actual = cardGame(n),
                    msg = `For n = ${n} `;
                assert.strictEqual(actual, expected, msg);
            }
        });
    });
} else {
    let entries = [
        [10n, 8n],
        [4n, 3n],
        [5n, 2n],
        [12n, 9n],
        [100000000000n, 99999999950n],
    ];
    for (let [n, expected] of entries) {
        let actual = cardGame(n),
            msg = `For n = ${n} `;
        console.log(actual, expected, msg);
    }
}
