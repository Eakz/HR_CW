// https://xn--www-hfd.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript/
const Test = require('chai')
function getAverageAge(list) {
    return Math.round(list.reduce((acc,e)=>acc+e.age,0)/list.length)
}

  describe("Tests", () => {
    it("test", () => {
  var list1 = [
    { firstNamGe: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];
  
  Test.assert.equal(getAverageAge(list1), 50);
  
  
  var list2 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
  ];
  
  Test.assert.equal(getAverageAge(list2), 21);
  
    });
  });
  