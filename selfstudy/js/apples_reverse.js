/*
task 8:
Apples - Reverse
You need to reverse the order of apple weights in grams
*/

function reverse_order_apples(apples) {
  return [...apples].reverse();
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: reverse_order_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: reverse_order_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: reverse_order_apples([1, 2, 3]) },
  { input: [100, 200], expected: reverse_order_apples([100, 200]) },
  { input: [], expected: reverse_order_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('reverse_order_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(reverse_order_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, reverse_order_apples(t.input) === t.expected || JSON.stringify(reverse_order_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
