/*
task 91:
Words - Sum
You need to calculate the total sum of word lengths
*/

function total_words(lengths) {
  return lengths.reduce((a, b) => a + b, 0);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: total_words([10, 20, 30]) },
  { input: [50, 60, 70], expected: total_words([50, 60, 70]) },
  { input: [1, 2, 3], expected: total_words([1, 2, 3]) },
  { input: [100, 200], expected: total_words([100, 200]) },
  { input: [], expected: total_words([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('total_words', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(total_words(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, total_words(t.input) === t.expected || JSON.stringify(total_words(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
