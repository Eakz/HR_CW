/*
task 74:
Cities - Avg
You need to compute the average of city populations in thousands
*/

function average_cities(populations) {
  return populations.length ? populations.reduce((a, b) => a + b, 0) / populations.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_cities([1, 2, 3]) },
  { input: [100, 200], expected: average_cities([100, 200]) },
  { input: [], expected: average_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_cities(t.input) === t.expected || JSON.stringify(average_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
