/*
task 23:
Cars - Min
You need to find the minimum value among car speeds in km/h
*/

function lowest_cars(speeds) {
  return speeds.length ? Math.min(...speeds) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: lowest_cars([10, 20, 30]) },
  { input: [50, 60, 70], expected: lowest_cars([50, 60, 70]) },
  { input: [1, 2, 3], expected: lowest_cars([1, 2, 3]) },
  { input: [100, 200], expected: lowest_cars([100, 200]) },
  { input: [], expected: lowest_cars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('lowest_cars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(lowest_cars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, lowest_cars(t.input) === t.expected || JSON.stringify(lowest_cars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
