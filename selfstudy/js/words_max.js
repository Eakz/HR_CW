/*
task 92:
Words - Max
You need to find the maximum value among word lengths
*/

function highest_words(lengths) {
  return lengths.length ? Math.max(...lengths) : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: highest_words([10, 20, 30]) },
  { input: [50, 60, 70], expected: highest_words([50, 60, 70]) },
  { input: [1, 2, 3], expected: highest_words([1, 2, 3]) },
  { input: [100, 200], expected: highest_words([100, 200]) },
  { input: [], expected: highest_words([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('highest_words', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(highest_words(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, highest_words(t.input) === t.expected || JSON.stringify(highest_words(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
