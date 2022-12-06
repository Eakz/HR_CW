// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
    return numbers.reduce((a, b) => a ^ b);
  }


if(require.main.path.includes('mocha')){
    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;


describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([1, 2, 1]), 2);
    assert.strictEqual(stray([2, 1, 1]), 2);
  });
});

}else{
    console.log(stray([1, 1, 2]), 2);
    console.log(stray([1, 2, 1]), 2);
    console.log(stray([2, 1, 1]), 2);
}