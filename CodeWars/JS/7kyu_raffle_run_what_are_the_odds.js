/**
 * Calculates the odds of winning at least one raffle.
 * @param {number[]} totals - Array of total ticket counts for each raffle
 * @param {number[]} purchased - Array of tickets purchased for each raffle
 * @returns {string} The odds as a fraction string (e.g., "1/3")
 */
function raffleOdds(totals, purchased) {
    const oddToLose=[1,1]
    for (let i = 0; i < purchased.length; i++) {
        oddToLose[0]=oddToLose[0]*(totals[i]-purchased[i])
        oddToLose[1]=oddToLose[1]*totals[i]
    }
    const oddToWin = [oddToLose[1]-oddToLose[0],oddToLose[1]]

    // Reduce fraction to lowest terms
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(oddToWin[0], oddToWin[1]);

    return `${oddToWin[0] / divisor}/${oddToWin[1] / divisor}`
}

if (require.main === 'chai') {
    const { assert } = require('chai');

    describe('Fixed tests', function () {
        describe('Examples', function () {
            it('Single raffle: 1 ticket out of 3', function () {
                assert.strictEqual(raffleOdds([3], [1]), '1/3');
            });

            it('Two raffles: 1 ticket each out of 4', function () {
                assert.strictEqual(raffleOdds([4, 4], [1, 1]), '7/16');
            });

            it('Three raffles with different pool sizes', function () {
                assert.strictEqual(raffleOdds([2, 3, 6], [1, 1, 1]), '13/18');
            });

            it('Single raffle: 3 tickets out of 10', function () {
                assert.strictEqual(raffleOdds([10], [3]), '3/10');
            });

            it('Two raffles: 2 and 1 tickets', function () {
                assert.strictEqual(raffleOdds([5, 8], [2, 1]), '13/40');
            });

            it('Multiple raffles: varying pool sizes', function () {
                assert.strictEqual(raffleOdds([5, 5, 5], [1, 2, 1]), '4/5');
            });

            it('Single large raffle', function () {
                assert.strictEqual(raffleOdds([100], [5]), '1/20');
            });

            it('Four raffles: mixed ticket counts', function () {
                assert.strictEqual(raffleOdds([2, 4, 5, 10], [1, 1, 1, 1]), '47/40');
            });
        });
    });
} else {
    console.log('Test 1 - Single raffle: 1 ticket out of 3');
    console.log('Result:', raffleOdds([3], [1]), 'Expected: 1/3');

    console.log('\nTest 2 - Two raffles: 1 ticket each out of 4');
    console.log('Result:', raffleOdds([4, 4], [1, 1]), 'Expected: 7/16');

    console.log('\nTest 3 - Three raffles with different pool sizes');
    console.log('Result:', raffleOdds([2, 3, 6], [1, 1, 1]), 'Expected: 13/18');

    console.log('\nTest 4 - Single raffle: 3 tickets out of 10');
    console.log('Result:', raffleOdds([10], [3]), 'Expected: 3/10');

    console.log('\nTest 5 - Two raffles: 2 and 1 tickets');
    console.log('Result:', raffleOdds([5, 8], [2, 1]), 'Expected: 13/40');

    console.log('\nTest 6 - Multiple raffles: varying pool sizes');
    console.log('Result:', raffleOdds([5, 5, 5], [1, 2, 1]), 'Expected: 4/5');

    console.log('\nTest 7 - Single large raffle');
    console.log('Result:', raffleOdds([100], [5]), 'Expected: 1/20');

    console.log('\nTest 8 - Four raffles: mixed ticket counts');
    console.log('Result:', raffleOdds([2, 4, 5, 10], [1, 1, 1, 1]), 'Expected: 47/40');
}
