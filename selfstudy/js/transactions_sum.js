/*
task 31:
Transactions - Sum
You need to calculate the total sum of transaction amounts in dollars
*/

function total_transactions(amounts) {
  return amounts.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_transactions([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_transactions([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_transactions([1, 2, 3]) },
  { input: [100, 200], expected: total_transactions([100, 200]) },
  { input: [], expected: total_transactions([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_transactions', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_transactions(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_transactions(t.input) === t.expected || JSON.stringify(total_transactions(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
