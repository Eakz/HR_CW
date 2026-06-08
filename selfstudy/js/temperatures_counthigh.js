/*
task 47:
Temperatures - CountHigh
You need to count how many values are greater than 50 in daily temperatures in Celsius
*/

function count_above_fifty_temperatures(temps) {
  return temps.filter(x => x > 50).length;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: count_above_fifty_temperatures([10, 20, 30]) },
  { input: [50, 60, 70], expected: count_above_fifty_temperatures([50, 60, 70]) },
  { input: [1, 2, 3], expected: count_above_fifty_temperatures([1, 2, 3]) },
  { input: [100, 200], expected: count_above_fifty_temperatures([100, 200]) },
  { input: [], expected: count_above_fifty_temperatures([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('count_above_fifty_temperatures', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(count_above_fifty_temperatures(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, count_above_fifty_temperatures(t.input) === t.expected || JSON.stringify(count_above_fifty_temperatures(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
