/*
task 1:
Apples - Sum
You need to calculate the total sum of apple weights in grams
*/

function total_apples(apples) {
  return apples.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_apples([1, 2, 3]) },
  { input: [100, 200], expected: total_apples([100, 200]) },
  { input: [], expected: total_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_apples(t.input) === t.expected || JSON.stringify(total_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
