// https://www.codewars.com/kata/64127b25114de109258fb6fe/train/javascript

function reflect([x, y], [m, b]) {
    return [(-2*m*b - m**2*x + 2*m*y + x) / (m**2 + 1), (2*b + m**2*y + 2*m*x - y) / (m**2 + 1)];
  }

  if(require.main.path.includes('mocha')){
    const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Solution test', () => {
  
  const tolerance = 1e-5;
  const render = arr => Array.isArray(arr) ? `[${arr.join(', ')}]` : arr;
  
  // [point: [y, x], line: [m, b], expected: [y', x']]
  const sampleTests = [
    [[2, 3], [1, 0], [3, 2]],
    [[2, 3], [-1, 0], [-3, -2]],
    [[55.0, 2.82], [1, 0], [2.82, 55]],
    [[1, 2], [3, 4], [-2, 3]],
    [[44, 123123], [44, 334], [5534.482188951988, 122998.21631388746]],
    [[-2, -3], [-1, 0], [3, 2]],
    [[82, -53], [7, 0], [-93.56, -27.92]],
  ];
  
  function act(point, line, expected) {
    const actual = reflect(point.slice(), line.slice());
    const msg = `Invalid result:\n\n  point: ${render(point)}\n  line: ${render(line)}\n  expected: ${render(expected)}\n  actual: ${render(actual)}\n\n`;
    assert(Array.isArray(actual), 'returned value is not an array');
    assert(actual.length == 2, 'returned value should contain X and Y coordinates');
    for (let i = 0; i < 2; i++) {
      assert.approximately(actual[i], expected[i], tolerance, msg);
    }
  }
  
  describe("Sample tests", () => {
    for (let [point, line, expected] of sampleTests) {
      it(`point: ${render(point)}, line: ${render(line)}`, () => {
        act(point, line, expected);
      });
    }
  });
  
});

  }else{
    console.log(reflect([2, 3], [1, 0]), [3, 2]);
    console.log(reflect([2, 3], [-1, 0]), [-3, -2]);
    console.log(reflect([55.0, 2.82], [1, 0]), [2.82, 55]);
    console.log(reflect([1, 2], [3, 4]), [-2, 3]);
    console.log(reflect([44, 123123], [44, 334]), [5534.482188951988, 122998.21631388746]);
    console.log(reflect([-2, -3], [-1, 0]), [3, 2]);
    console.log(reflect([82, -53], [7, 0]), [-93.56, -27.92]);
  }