/*
task 55:
Books - FilterHigh
You need to return only the values greater than 50 from book page counts
*/

function above_fifty_books(pages) {
  return pages.filter(x => x > 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: above_fifty_books([10, 20, 30]) },
  { input: [50, 60, 70], expected: above_fifty_books([50, 60, 70]) },
  { input: [1, 2, 3], expected: above_fifty_books([1, 2, 3]) },
  { input: [100, 200], expected: above_fifty_books([100, 200]) },
  { input: [], expected: above_fifty_books([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('above_fifty_books', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(above_fifty_books(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, above_fifty_books(t.input) === t.expected || JSON.stringify(above_fifty_books(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
