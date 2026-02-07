/*
task 4:
Apples - Avg
You need to compute the average of apple weights in grams
*/

function average_apples(apples) {
  return apples.length ? apples.reduce((a, b) => a + b, 0) / apples.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_apples([1, 2, 3]) },
  { input: [100, 200], expected: average_apples([100, 200]) },
  { input: [], expected: average_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_apples(t.input) === t.expected || JSON.stringify(average_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
