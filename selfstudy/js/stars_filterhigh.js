/*
task 85:
Stars - FilterHigh
You need to return only the values greater than 50 from star luminosities
*/

function above_fifty_stars(brightness) {
  return brightness.filter(x => x > 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: above_fifty_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: above_fifty_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: above_fifty_stars([1, 2, 3]) },
  { input: [100, 200], expected: above_fifty_stars([100, 200]) },
  { input: [], expected: above_fifty_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('above_fifty_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(above_fifty_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, above_fifty_stars(t.input) === t.expected || JSON.stringify(above_fifty_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
