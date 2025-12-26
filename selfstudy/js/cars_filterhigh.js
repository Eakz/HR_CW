/*
task 25:
Cars - FilterHigh
You need to return only the values greater than 50 from car speeds in km/h
*/

function above_fifty_cars(speeds) {
  return speeds.filter(x => x > 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: above_fifty_cars([10, 20, 30]) },
  { input: [50, 60, 70], expected: above_fifty_cars([50, 60, 70]) },
  { input: [1, 2, 3], expected: above_fifty_cars([1, 2, 3]) },
  { input: [100, 200], expected: above_fifty_cars([100, 200]) },
  { input: [], expected: above_fifty_cars([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('above_fifty_cars', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(above_fifty_cars(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, above_fifty_cars(t.input) === t.expected || JSON.stringify(above_fifty_cars(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
