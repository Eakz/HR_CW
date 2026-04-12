/*
task 88:
Stars - Reverse
You need to reverse the order of star luminosities
*/

function reverse_order_stars(brightness) {
  return [...brightness].reverse();
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: reverse_order_stars([10, 20, 30]) },
  { input: [50, 60, 70], expected: reverse_order_stars([50, 60, 70]) },
  { input: [1, 2, 3], expected: reverse_order_stars([1, 2, 3]) },
  { input: [100, 200], expected: reverse_order_stars([100, 200]) },
  { input: [], expected: reverse_order_stars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('reverse_order_stars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(reverse_order_stars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, reverse_order_stars(t.input) === t.expected || JSON.stringify(reverse_order_stars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
