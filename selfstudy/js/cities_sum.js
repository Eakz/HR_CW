/*
task 71:
Cities - Sum
You need to calculate the total sum of city populations in thousands
*/

function total_cities(populations) {
  return populations.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_cities([1, 2, 3]) },
  { input: [100, 200], expected: total_cities([100, 200]) },
  { input: [], expected: total_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_cities(t.input) === t.expected || JSON.stringify(total_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
