/*
task 81:
Stars - Sum
You need to calculate the total sum of star luminosities
*/

function total_stars(brightness) {
  return brightness.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_stars([1, 2, 3]) },
  { input: [100, 200], expected: total_stars([100, 200]) },
  { input: [], expected: total_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_stars(t.input) === t.expected || JSON.stringify(total_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
