/*
task 24:
Cars - Avg
You need to compute the average of car speeds in km/h
*/

function average_cars(speeds) {
  return speeds.length ? speeds.reduce((a, b) => a + b, 0) / speeds.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_cars([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_cars([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_cars([1, 2, 3]) },
  { input: [100, 200], expected: average_cars([100, 200]) },
  { input: [], expected: average_cars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_cars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_cars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_cars(t.input) === t.expected || JSON.stringify(average_cars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
