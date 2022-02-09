// https://www.codewars.com/kata/525f50e3b73515a6db000b83?utm_source=newsletter

const { slice } = require("lodash");

function createPhoneNumber(n){
    const snj=(b,s,f)=>b.slice(s,f).join('')
  return `(${snj(n,0,3)}) ${snj(n,3,6)}-${snj(n,6)}`
}

if (process.mainModule.path.includes('mocha')) {
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;
    
    describe("Create Phone Number", () => {
      it("Fixed tests", () => {
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
      });
    });

}