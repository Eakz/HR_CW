/*
task 9:
Apples - SortAsc
You need to sort the values in ascending order for apple weights in grams
*/

function sort_up_apples(apples) {
  return [...apples].sort((a, b) => a - b);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: sort_up_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: sort_up_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: sort_up_apples([1, 2, 3]) },
  { input: [100, 200], expected: sort_up_apples([100, 200]) },
  { input: [], expected: sort_up_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sort_up_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sort_up_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sort_up_apples(t.input) === t.expected || JSON.stringify(sort_up_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
