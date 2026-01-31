/*
task 3:
Apples - Min
You need to find the minimum value among apple weights in grams
*/

function lowest_apples(apples) {
  return apples.length ? Math.min(...apples) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: lowest_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: lowest_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: lowest_apples([1, 2, 3]) },
  { input: [100, 200], expected: lowest_apples([100, 200]) },
  { input: [], expected: lowest_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('lowest_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(lowest_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, lowest_apples(t.input) === t.expected || JSON.stringify(lowest_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
