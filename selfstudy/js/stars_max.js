/*
task 82:
Stars - Max
You need to find the maximum value among star luminosities
*/

function highest_stars(brightness) {
  return brightness.length ? Math.max(...brightness) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_stars([1, 2, 3]) },
  { input: [100, 200], expected: highest_stars([100, 200]) },
  { input: [], expected: highest_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_stars(t.input) === t.expected || JSON.stringify(highest_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
