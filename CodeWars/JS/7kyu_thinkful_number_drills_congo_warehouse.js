// https://www.codewars.com/kata/5862e7c63f8628a126000e18/train/javascript

function boxCapacity(l,w,h) {
    const getF=v=>Math.floor(v*12/16)
    return getF(l)*getF(w)*getF(h)
  }
  

console.log(boxCapacity(32, 64, 16), 13824)
console.log(boxCapacity(20, 20, 20), 3375)
console.log(boxCapacity(80, 40, 20), 27000)
console.log(boxCapacity(99, 82, 14), 45140)

// describe("Testing boxCapacity", function(){
//     it("Basic tests", function(){
//       Test.assertEquals(boxCapacity(32, 64, 16), 13824);
//       Test.assertEquals(boxCapacity(20, 20, 20), 3375);
//       Test.assertEquals(boxCapacity(80, 40, 20), 27000);
//     });
//   });