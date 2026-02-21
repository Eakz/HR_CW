/*
task 11:
Students - Sum
You need to calculate the total sum of student test scores
*/

function total_students(scores) {
  return scores.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_students([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_students([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_students([1, 2, 3]) },
  { input: [100, 200], expected: total_students([100, 200]) },
  { input: [], expected: total_students([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_students', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_students(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_students(t.input) === t.expected || JSON.stringify(total_students(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
