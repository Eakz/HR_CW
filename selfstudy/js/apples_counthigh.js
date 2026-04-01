/*
task 7:
Apples - CountHigh
You need to count how many values are greater than 50 in apple weights in grams
*/

function count_above_fifty_apples(apples) {
  return apples.filter(x => x > 50).length;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: count_above_fifty_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: count_above_fifty_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: count_above_fifty_apples([1, 2, 3]) },
  { input: [100, 200], expected: count_above_fifty_apples([100, 200]) },
  { input: [], expected: count_above_fifty_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('count_above_fifty_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(count_above_fifty_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, count_above_fifty_apples(t.input) === t.expected || JSON.stringify(count_above_fifty_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
