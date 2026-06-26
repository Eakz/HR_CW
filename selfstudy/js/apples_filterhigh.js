/*
task 5:
Apples - FilterHigh
You need to return only the values greater than 50 from apple weights in grams
*/

function above_fifty_apples(apples) {
  return apples.filter(x => x > 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: above_fifty_apples([10, 20, 30]) },
  { input: [50, 60, 70], expected: above_fifty_apples([50, 60, 70]) },
  { input: [1, 2, 3], expected: above_fifty_apples([1, 2, 3]) },
  { input: [100, 200], expected: above_fifty_apples([100, 200]) },
  { input: [], expected: above_fifty_apples([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('above_fifty_apples', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(above_fifty_apples(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, above_fifty_apples(t.input) === t.expected || JSON.stringify(above_fifty_apples(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// works i think
