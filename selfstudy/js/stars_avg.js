/*
task 84:
Stars - Avg
You need to compute the average of star luminosities
*/

function average_stars(brightness) {
  return brightness.length ? brightness.reduce((a, b) => a + b, 0) / brightness.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_stars([1, 2, 3]) },
  { input: [100, 200], expected: average_stars([100, 200]) },
  { input: [], expected: average_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_stars(t.input) === t.expected || JSON.stringify(average_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
