// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
function isTriangle(a,b,c)
{
   return a+b>c&&b+c>a&&a+c>b;
}

if(require.main.path.includes('mocha')){
    const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})
}else {
    console.log(isTriangle(1,2,2), true);
    console.log(isTriangle(7,2,2), false);
}