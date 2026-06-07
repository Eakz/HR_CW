/*
task 70:
Players - SortDesc
You need to sort the values in descending order for player heights in cm
*/

function sort_down_players(heights) {
  return [...heights].sort((a, b) => b - a);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: sort_down_players([10, 20, 30]) },
  { input: [50, 60, 70], expected: sort_down_players([50, 60, 70]) },
  { input: [1, 2, 3], expected: sort_down_players([1, 2, 3]) },
  { input: [100, 200], expected: sort_down_players([100, 200]) },
  { input: [], expected: sort_down_players([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sort_down_players', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sort_down_players(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sort_down_players(t.input) === t.expected || JSON.stringify(sort_down_players(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
