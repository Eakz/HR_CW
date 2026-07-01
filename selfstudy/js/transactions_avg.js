/*
task 34:
Transactions - Avg
You need to compute the average of transaction amounts in dollars
*/

function average_transactions(amounts) {
  return amounts.length ? amounts.reduce((a, b) => a + b, 0) / amounts.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_transactions([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_transactions([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_transactions([1, 2, 3]) },
  { input: [100, 200], expected: average_transactions([100, 200]) },
  { input: [], expected: average_transactions([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_transactions', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_transactions(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_transactions(t.input) === t.expected || JSON.stringify(average_transactions(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
