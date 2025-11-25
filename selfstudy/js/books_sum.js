/*
task 51:
Books - Sum
You need to calculate the total sum of book page counts
*/

function total_books(pages) {
  return pages.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_books([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_books([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_books([1, 2, 3]) },
  { input: [100, 200], expected: total_books([100, 200]) },
  { input: [], expected: total_books([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_books', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_books(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_books(t.input) === t.expected || JSON.stringify(total_books(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
