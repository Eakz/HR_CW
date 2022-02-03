// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript

function validateWord(s)
{
    return new Set(Object.values([...s.toLowerCase()].reduce((acc,e)=>{
        if(acc[e]){
            acc[e]++
        }else{
            acc[e]=1
        }
        return acc
    },{}))).size===1
}
// Variant 2
// function validateWord(s, c = s.toLowerCase())
// {
//   return c.length % new Set(c).size == 0
// }
console.log(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
console.log(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
console.log(validateWord("abc123"),true, "The word was: \"abc123\" \n");
console.log(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
console.log(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
console.log(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");

if (process.mainModule.path.includes('mocha')) {
const Test = require('chai').assert
describe("GetMiddle", function() {
  it("Tests", function() {
    Test.equal(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
    Test.equal(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
    Test.equal(validateWord("abc123"),true, "The word was: \"abc123\" \n");
    Test.equal(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
    Test.equal(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
    Test.equal(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");
  });
});
}