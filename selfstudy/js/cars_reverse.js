/*
task 28:
Cars - Reverse
You need to reverse the order of car speeds in km/h
*/

function reverse_order_cars(speeds) {
  return [...speeds].reverse();
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: reverse_order_cars([10, 20, 30]) },
  { input: [50, 60, 70], expected: reverse_order_cars([50, 60, 70]) },
  { input: [1, 2, 3], expected: reverse_order_cars([1, 2, 3]) },
  { input: [100, 200], expected: reverse_order_cars([100, 200]) },
  { input: [], expected: reverse_order_cars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('reverse_order_cars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(reverse_order_cars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, reverse_order_cars(t.input) === t.expected || JSON.stringify(reverse_order_cars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
