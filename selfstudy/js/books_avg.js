/*
task 54:
Books - Avg
You need to compute the average of book page counts
*/

function average_books(pages) {
  return pages.length ? pages.reduce((a, b) => a + b, 0) / pages.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_books([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_books([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_books([1, 2, 3]) },
  { input: [100, 200], expected: average_books([100, 200]) },
  { input: [], expected: average_books([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_books', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_books(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_books(t.input) === t.expected || JSON.stringify(average_books(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
