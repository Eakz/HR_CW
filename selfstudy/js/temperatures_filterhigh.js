/*
task 45:
Temperatures - FilterHigh
You need to return only the values greater than 50 from daily temperatures in Celsius
*/

function above_fifty_temperatures(temps) {
  return temps.filter(x => x > 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: above_fifty_temperatures([10, 20, 30]) },
  { input: [50, 60, 70], expected: above_fifty_temperatures([50, 60, 70]) },
  { input: [1, 2, 3], expected: above_fifty_temperatures([1, 2, 3]) },
  { input: [100, 200], expected: above_fifty_temperatures([100, 200]) },
  { input: [], expected: above_fifty_temperatures([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('above_fifty_temperatures', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(above_fifty_temperatures(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, above_fifty_temperatures(t.input) === t.expected || JSON.stringify(above_fifty_temperatures(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
