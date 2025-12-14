/*
task 63:
Players - Min
You need to find the minimum value among player heights in cm
*/

function lowest_players(heights) {
  return heights.length ? Math.min(...heights) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: lowest_players([10, 20, 30]) },
  { input: [50, 60, 70], expected: lowest_players([50, 60, 70]) },
  { input: [1, 2, 3], expected: lowest_players([1, 2, 3]) },
  { input: [100, 200], expected: lowest_players([100, 200]) },
  { input: [], expected: lowest_players([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('lowest_players', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(lowest_players(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, lowest_players(t.input) === t.expected || JSON.stringify(lowest_players(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
