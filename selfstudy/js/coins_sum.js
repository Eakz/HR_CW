/*
Task: Coins - Sum
Calculate the total sum of coin values.
*/

function sum_coins(coins) {
  return coins.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: 60 },
  { input: [5, 5, 5], expected: 15 },
  { input: [1, 2], expected: 3 },
  { input: [100], expected: 100 },
  { input: [], expected: 0 }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sum_coins', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sum_coins(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sum_coins(t.input) === t.expected ? "PASS" : "FAIL");
  });
}
