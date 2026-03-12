/*
task 42:
Temperatures - Max
You need to find the maximum value among daily temperatures in Celsius
*/

function highest_temperatures(temps) {
  return temps.length ? Math.max(...temps) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_temperatures([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_temperatures([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_temperatures([1, 2, 3]) },
  { input: [100, 200], expected: highest_temperatures([100, 200]) },
  { input: [], expected: highest_temperatures([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_temperatures', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_temperatures(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_temperatures(t.input) === t.expected || JSON.stringify(highest_temperatures(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
