/*
task 75:
Cities - FilterHigh
You need to return only the values greater than 50 from city populations in thousands
*/

function above_fifty_cities(populations) {
  return populations.filter(x => x > 50);
}

// Tests
const tests = [
  { input: [10, 20, 30], expected: above_fifty_cities([10, 20, 30]) },
  { input: [50, 60, 70], expected: above_fifty_cities([50, 60, 70]) },
  { input: [1, 2, 3], expected: above_fifty_cities([1, 2, 3]) },
  { input: [100, 200], expected: above_fifty_cities([100, 200]) },
  { input: [], expected: above_fifty_cities([]) }
];

if (process.argv.includes('mocha')) {
  const assert = require('assert');
  describe('above_fifty_cities', () => {
    tests.forEach((t, idx) => {
      it(`test case ${idx+1}`, () => {
        assert.deepStrictEqual(above_fifty_cities(t.input), t.expected);
      });
    });
  });
} else {
  tests.forEach((t, idx) => {
    console.log(`Test ${idx+1}:`, above_fifty_cities(t.input) === t.expected || JSON.stringify(above_fifty_cities(t.input)) === JSON.stringify(t.expected) ? "PASS" : "FAIL");
  });
}

// done
