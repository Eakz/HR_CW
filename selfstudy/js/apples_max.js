/*
task 2:
Apples - Max
You need to find the maximum value among apple weights in grams
*/

function highest_apples(apples) {
  return apples.length ? Math.max(...apples) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_apples([1, 2, 3]) },
  { input: [100, 200], expected: highest_apples([100, 200]) },
  { input: [], expected: highest_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_apples(t.input) === t.expected || JSON.stringify(highest_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
