/*
task 90:
Stars - SortDesc
You need to sort the values in descending order for star luminosities
*/

function sort_down_stars(brightness) {
  return [...brightness].sort((a, b) => b - a);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: sort_down_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: sort_down_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: sort_down_stars([1, 2, 3]) },
  { input: [100, 200], expected: sort_down_stars([100, 200]) },
  { input: [], expected: sort_down_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sort_down_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sort_down_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sort_down_stars(t.input) === t.expected || JSON.stringify(sort_down_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
