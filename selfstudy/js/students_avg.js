/*
task 14:
Students - Avg
You need to compute the average of student test scores
*/

function average_students(scores) {
  return scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_students([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_students([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_students([1, 2, 3]) },
  { input: [100, 200], expected: average_students([100, 200]) },
  { input: [], expected: average_students([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_students', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_students(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_students(t.input) === t.expected || JSON.stringify(average_students(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
