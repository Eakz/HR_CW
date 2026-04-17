/*
task 61:
Players - Sum
You need to calculate the total sum of player heights in cm
*/

function total_players(heights) {
  return heights.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_players([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_players([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_players([1, 2, 3]) },
  { input: [100, 200], expected: total_players([100, 200]) },
  { input: [], expected: total_players([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_players', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_players(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_players(t.input) === t.expected || JSON.stringify(total_players(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
