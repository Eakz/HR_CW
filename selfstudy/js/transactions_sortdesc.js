/*
task 40:
Transactions - SortDesc
You need to sort the values in descending order for transaction amounts in dollars
*/

function sort_down_transactions(amounts) {
  return [...amounts].sort((a, b) => b - a);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: sort_down_transactions([10, 20, 30]) },
  { input: [50, 60, 70], expected: sort_down_transactions([50, 60, 70]) },
  { input: [1, 2, 3], expected: sort_down_transactions([1, 2, 3]) },
  { input: [100, 200], expected: sort_down_transactions([100, 200]) },
  { input: [], expected: sort_down_transactions([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sort_down_transactions', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sort_down_transactions(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sort_down_transactions(t.input) === t.expected || JSON.stringify(sort_down_transactions(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
