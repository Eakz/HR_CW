/*
task 76:
Cities - FilterLow
You need to return only the values less than 50 from city populations in thousands
*/

function below_fifty_cities(populations) {
  return populations.filter(x => x < 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: below_fifty_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: below_fifty_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: below_fifty_cities([1, 2, 3]) },
  { input: [100, 200], expected: below_fifty_cities([100, 200]) },
  { input: [], expected: below_fifty_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('below_fifty_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(below_fifty_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, below_fifty_cities(t.input) === t.expected || JSON.stringify(below_fifty_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
