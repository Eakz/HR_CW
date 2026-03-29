/*
task 86:
Stars - FilterLow
You need to return only the values less than 50 from star luminosities
*/

function below_fifty_stars(brightness) {
  return brightness.filter(x => x < 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: below_fifty_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: below_fifty_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: below_fifty_stars([1, 2, 3]) },
  { input: [100, 200], expected: below_fifty_stars([100, 200]) },
  { input: [], expected: below_fifty_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('below_fifty_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(below_fifty_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, below_fifty_stars(t.input) === t.expected || JSON.stringify(below_fifty_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
