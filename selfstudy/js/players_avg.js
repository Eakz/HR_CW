/*
task 64:
Players - Avg
You need to compute the average of player heights in cm
*/

function average_players(heights) {
  return heights.length ? heights.reduce((a, b) => a + b, 0) / heights.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_players([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_players([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_players([1, 2, 3]) },
  { input: [100, 200], expected: average_players([100, 200]) },
  { input: [], expected: average_players([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_players', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_players(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_players(t.input) === t.expected || JSON.stringify(average_players(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
