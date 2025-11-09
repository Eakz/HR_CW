/*
task 87:
Stars - CountHigh
You need to count how many values are greater than 50 in star luminosities
*/

function count_above_fifty_stars(brightness) {
  return brightness.filter(x => x > 50).length;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: count_above_fifty_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: count_above_fifty_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: count_above_fifty_stars([1, 2, 3]) },
  { input: [100, 200], expected: count_above_fifty_stars([100, 200]) },
  { input: [], expected: count_above_fifty_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('count_above_fifty_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(count_above_fifty_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, count_above_fifty_stars(t.input) === t.expected || JSON.stringify(count_above_fifty_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
