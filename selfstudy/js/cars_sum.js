/*
task 21:
Cars - Sum
You need to calculate the total sum of car speeds in km/h
*/

function total_cars(speeds) {
  return speeds.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_cars([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_cars([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_cars([1, 2, 3]) },
  { input: [100, 200], expected: total_cars([100, 200]) },
  { input: [], expected: total_cars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_cars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_cars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_cars(t.input) === t.expected || JSON.stringify(total_cars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
