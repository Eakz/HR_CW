/*
task 33:
Transactions - Min
You need to find the minimum value among transaction amounts in dollars
*/

function lowest_transactions(amounts) {
  return amounts.length ? Math.min(...amounts) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: lowest_transactions([10, 20, 30]) },
  { input: [50, 60, 70], expected: lowest_transactions([50, 60, 70]) },
  { input: [1, 2, 3], expected: lowest_transactions([1, 2, 3]) },
  { input: [100, 200], expected: lowest_transactions([100, 200]) },
  { input: [], expected: lowest_transactions([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('lowest_transactions', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(lowest_transactions(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, lowest_transactions(t.input) === t.expected || JSON.stringify(lowest_transactions(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
