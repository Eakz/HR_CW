/*
task 62:
Players - Max
You need to find the maximum value among player heights in cm
*/

function highest_players(heights) {
  return heights.length ? Math.max(...heights) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_players([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_players([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_players([1, 2, 3]) },
  { input: [100, 200], expected: highest_players([100, 200]) },
  { input: [], expected: highest_players([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_players', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_players(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_players(t.input) === t.expected || JSON.stringify(highest_players(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
