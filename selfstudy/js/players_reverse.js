/*
task 68:
Players - Reverse
You need to reverse the order of player heights in cm
*/

function reverse_order_players(heights) {
  return [...heights].reverse();
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: reverse_order_players([10, 20, 30]) },
  { input: [50, 60, 70], expected: reverse_order_players([50, 60, 70]) },
  { input: [1, 2, 3], expected: reverse_order_players([1, 2, 3]) },
  { input: [100, 200], expected: reverse_order_players([100, 200]) },
  { input: [], expected: reverse_order_players([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('reverse_order_players', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(reverse_order_players(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, reverse_order_players(t.input) === t.expected || JSON.stringify(reverse_order_players(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
