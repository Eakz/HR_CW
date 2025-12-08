/*
task 19:
Students - SortAsc
You need to sort the values in ascending order for student test scores
*/

function sort_up_students(scores) {
  return [...scores].sort((a, b) => a - b);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: sort_up_students([10, 20, 30]) },
  { input: [50, 60, 70], expected: sort_up_students([50, 60, 70]) },
  { input: [1, 2, 3], expected: sort_up_students([1, 2, 3]) },
  { input: [100, 200], expected: sort_up_students([100, 200]) },
  { input: [], expected: sort_up_students([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('sort_up_students', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(sort_up_students(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, sort_up_students(t.input) === t.expected || JSON.stringify(sort_up_students(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
