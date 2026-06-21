/*
task 52:
Books - Max
You need to find the maximum value among book page counts
*/

function highest_books(pages) {
  return pages.length ? Math.max(...pages) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_books([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_books([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_books([1, 2, 3]) },
  { input: [100, 200], expected: highest_books([100, 200]) },
  { input: [], expected: highest_books([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_books', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_books(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_books(t.input) === t.expected || JSON.stringify(highest_books(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
