// https://www.codewars.com/kata/62cecd4e5487c10028996e04

const racePodium=n=>n!=7?[r=n/3+.99|0,r+1,n-r*2-1]:[2,4,1];

  if (process.mainModule.path.includes('mocha')) {
    const chai = require("chai");
const assert = chai.assert;

function dotest(n, expected) {
  assert.deepEqual(racePodium(n), expected, `With n = ${n}`)
}

describe("Tests", function() {
  it("Fixed tests", function() {
    dotest(11, [4, 5, 2]);
    dotest(6, [2, 3, 1]);
    dotest(10, [4, 5, 1]);
    dotest(100000, [33334, 33335, 33331]);
    dotest(7, [2, 4, 1]);
    dotest(8, [3, 4, 1]);
  });
});

  }else{
    console.log(racePodium(11), [4, 5, 2]);
    console.log(racePodium(6), [2, 3, 1]);
    console.log(racePodium(10), [4, 5, 1]);
    console.log(racePodium(100000), [33334, 33335, 33331]);
    console.log(racePodium(7), [2, 4, 1]);
    console.log(racePodium(8), [3, 4, 1]);
  }