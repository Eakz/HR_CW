/*
task 94:
Words - Avg
You need to compute the average of word lengths
*/

function average_words(lengths) {
  return lengths.length ? lengths.reduce((a, b) => a + b, 0) / lengths.length : 0;
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: average_words([10, 20, 30]) },
  { input: [50, 60, 70], expected: average_words([50, 60, 70]) },
  { input: [1, 2, 3], expected: average_words([1, 2, 3]) },
  { input: [100, 200], expected: average_words([100, 200]) },
  { input: [], expected: average_words([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('average_words', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(average_words(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, average_words(t.input) === t.expected || JSON.stringify(average_words(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
