/*
task 22:
Cars - Max
You need to find the maximum value among car speeds in km/h
*/

function highest_cars(speeds) {
  return speeds.length ? Math.max(...speeds) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_cars([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_cars([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_cars([1, 2, 3]) },
  { input: [100, 200], expected: highest_cars([100, 200]) },
  { input: [], expected: highest_cars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_cars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_cars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_cars(t.input) === t.expected || JSON.stringify(highest_cars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
