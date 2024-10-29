
function factorial(n){
    if(n<2){
        return 1
    }
    return n*factorial(n-1)
  }

if (require.main.path.includes('mocha')) {
const assert = require('chai').assert;

describe("Basic tests", () => {
  it("factorial(0) should return 1", () => {
    assert.equal(factorial(0), 1);
  });

  it("factorial(1) should return 1", () => {
    assert.equal(factorial(1), 1);
  });

  it("factorial(7) should return 5040", () => {
    assert.equal(factorial(7), 5040);
  });

  it("factorial(18) should return 6402373705728000", () => {
    assert.equal(factorial(18), 6402373705728000);
  });
});
}else{
    console.log(factorial(0), 1);
    console.log(factorial(1), 1);
    console.log(factorial(7), 5040);
    console.log(factorial(18), 6402373705728000);
}