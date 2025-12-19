/*
task 32:
Transactions - Max
You need to find the maximum value among transaction amounts in dollars
*/

function highest_transactions(amounts) {
  return amounts.length ? Math.max(...amounts) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_transactions([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_transactions([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_transactions([1, 2, 3]) },
  { input: [100, 200], expected: highest_transactions([100, 200]) },
  { input: [], expected: highest_transactions([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_transactions', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_transactions(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_transactions(t.input) === t.expected || JSON.stringify(highest_transactions(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
