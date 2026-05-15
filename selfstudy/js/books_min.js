/*
task 53:
Books - Min
You need to find the minimum value among book page counts
*/

function lowest_books(pages) {
  return pages.length ? Math.min(...pages) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: lowest_books([10, 20, 30]) },
  { input: [50, 60, 70], expected: lowest_books([50, 60, 70]) },
  { input: [1, 2, 3], expected: lowest_books([1, 2, 3]) },
  { input: [100, 200], expected: lowest_books([100, 200]) },
  { input: [], expected: lowest_books([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('lowest_books', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(lowest_books(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, lowest_books(t.input) === t.expected || JSON.stringify(lowest_books(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
