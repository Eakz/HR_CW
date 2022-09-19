// https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript

const sum = (...args)=>args.reduce((acc,e)=>acc+e)
if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert
    describe("Sample tests", () => {
        it("Small tests", () => {
          Test.equal( sum(1), 1 )
          Test.equal( sum(1, 2), 3 )
          Test.equal( sum(5, 7, 9), 21 )
          Test.equal( sum(12, 1, 1, 1, 1), 16 )
          Test.equal( sum(12, 1, 1, 1, 1, 1, 1), 18 )
        })
      })
}else{

}
