// https://www.codewars.com/kata/59b11f57f322e5da45000254/train/javascript

function onesComplement(n) {
    return [...n].map(e=>e==='1'?'0':'1').join('')
};
  console.log(onesComplement("0"), "1");
  console.log(onesComplement("1"), "0");
  console.log(onesComplement("01"), "10");
  console.log(onesComplement("10"), "01");
  console.log(onesComplement("1101"), "0010");
  if (require.main.path.includes('mocha')) {
    const Test = require('chai')
    describe("Tests", () => {
        it("test", () => {
        Test.assert.equal(onesComplement("0"), "1");
        Test.assert.equal(onesComplement("1"), "0");
        Test.assert.equal(onesComplement("01"), "10");
        Test.assert.equal(onesComplement("10"), "01");
        Test.assert.equal(onesComplement("1101"), "0010");
        });
      });
      
}