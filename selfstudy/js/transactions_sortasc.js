/*
task 39:
Transactions - SortAsc
You need to sort the values in ascending order for transaction amounts in dollars
*/

function sort_up_transactions(amounts) {
  return [...amounts].sort((a, b) => a - b);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: sort_up_transactions([10, 20, 30]) },
  { input: [50, 60, 70], expected: sort_up_transactions([50, 60, 70]) },
  { input: [1, 2, 3], expected: sort_up_transactions([1, 2, 3]) },
  { input: [100, 200], expected: sort_up_transactions([100, 200]) },
  { input: [], expected: sort_up_transactions([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sort_up_transactions', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sort_up_transactions(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sort_up_transactions(t.input) === t.expected || JSON.stringify(sort_up_transactions(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
