// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function(l , w) {
    return l===w?l*w:2*(l+w)
  };

  if (require.main.path.includes('mocha')) {
const Test = require('chai').assert
  describe("Tests", () => {
    it("test", () => {
  Test.equal(areaOrPerimeter(4 , 4) , 16);
  Test.equal(areaOrPerimeter(6 , 10) , 32);
    });
  });
}