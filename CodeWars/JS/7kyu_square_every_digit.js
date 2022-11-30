// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    return Number([...num.toString()].map(n=>Number(n)**2).join(''))
  }

if(require.main.path.includes('mocha')){
    const { assert } = require("chai")
describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})

}else{
    console.log(squareDigits(3212), 9414);
    console.log(squareDigits(2112), 4114);
    console.log(squareDigits(0), 0);

}