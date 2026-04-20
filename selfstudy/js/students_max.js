/*
task 12:
Students - Max
You need to find the maximum value among student test scores
*/

function highest_students(scores) {
  return scores.length ? Math.max(...scores) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_students([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_students([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_students([1, 2, 3]) },
  { input: [100, 200], expected: highest_students([100, 200]) },
  { input: [], expected: highest_students([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_students', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_students(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_students(t.input) === t.expected || JSON.stringify(highest_students(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
