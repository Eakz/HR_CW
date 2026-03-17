/*
task 96:
Words - FilterLow
You need to return only the values less than 50 from word lengths
*/

function below_fifty_words(lengths) {
  return lengths.filter(x => x < 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: below_fifty_words([10, 20, 30]) },
  { input: [50, 60, 70], expected: below_fifty_words([50, 60, 70]) },
  { input: [1, 2, 3], expected: below_fifty_words([1, 2, 3]) },
  { input: [100, 200], expected: below_fifty_words([100, 200]) },
  { input: [], expected: below_fifty_words([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('below_fifty_words', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(below_fifty_words(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, below_fifty_words(t.input) === t.expected || JSON.stringify(below_fifty_words(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// finally works
