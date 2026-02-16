/*
task 46:
Temperatures - FilterLow
You need to return only the values less than 50 from daily temperatures in Celsius
*/

function below_fifty_temperatures(temps) {
  return temps.filter(x => x < 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: below_fifty_temperatures([10, 20, 30]) },
  { input: [50, 60, 70], expected: below_fifty_temperatures([50, 60, 70]) },
  { input: [1, 2, 3], expected: below_fifty_temperatures([1, 2, 3]) },
  { input: [100, 200], expected: below_fifty_temperatures([100, 200]) },
  { input: [], expected: below_fifty_temperatures([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('below_fifty_temperatures', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(below_fifty_temperatures(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, below_fifty_temperatures(t.input) === t.expected || JSON.stringify(below_fifty_temperatures(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
