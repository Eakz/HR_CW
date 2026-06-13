/*
Task: Houses - Sum
Calculate the total sum of house sizes.
*/

function sum_houses(houses) {
  return houses.reduce((a, b) => a + b, 0);
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
  describe('sum_houses', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sum_houses(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sum_houses(t.input) === t.expected ? "PASS" : "FAIL");
  });
}
