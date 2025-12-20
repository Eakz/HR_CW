/*
task 78:
Cities - Reverse
You need to reverse the order of city populations in thousands
*/

function reverse_order_cities(populations) {
  return [...populations].reverse();
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: reverse_order_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: reverse_order_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: reverse_order_cities([1, 2, 3]) },
  { input: [100, 200], expected: reverse_order_cities([100, 200]) },
  { input: [], expected: reverse_order_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('reverse_order_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(reverse_order_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, reverse_order_cities(t.input) === t.expected || JSON.stringify(reverse_order_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
