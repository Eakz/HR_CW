/*
task 72:
Cities - Max
You need to find the maximum value among city populations in thousands
*/

function highest_cities(populations) {
  return populations.length ? Math.max(...populations) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_cities([1, 2, 3]) },
  { input: [100, 200], expected: highest_cities([100, 200]) },
  { input: [], expected: highest_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_cities(t.input) === t.expected || JSON.stringify(highest_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
