// https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript
function symmetricPoint(p, q) {
  return [q[0]+q[0]-p[0],q[1]+q[1]-p[1]]
}
console.log(symmetricPoint([0,0], [1,1]), [2, 2]);
console.log(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
console.log(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
console.log(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
console.log(symmetricPoint([0, 0], [0, 0]), [0, 0]);


if (require.main.path.includes('mocha')) {
    const assert = require("chai").assert;

    describe("Points of Reflection", () => {
      it("Basic tests", () => {
        assert.deepEqual(symmetricPoint([0,0], [1,1]), [2, 2]);
        assert.deepEqual(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
        assert.deepEqual(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
        assert.deepEqual(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
        assert.deepEqual(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
        assert.deepEqual(symmetricPoint([0, 0], [0, 0]), [0, 0]);
      });
    });
}