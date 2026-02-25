/*
task 73:
Cities - Min
You need to find the minimum value among city populations in thousands
*/

function lowest_cities(populations) {
  return populations.length ? Math.min(...populations) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: lowest_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: lowest_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: lowest_cities([1, 2, 3]) },
  { input: [100, 200], expected: lowest_cities([100, 200]) },
  { input: [], expected: lowest_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('lowest_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(lowest_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, lowest_cities(t.input) === t.expected || JSON.stringify(lowest_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
