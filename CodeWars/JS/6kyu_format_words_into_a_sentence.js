// https://www.codewars.com/kata/51689e27fe9a00b126000004

const formatWords=(words)=>{
    if(!words){
        return ''
    }
    const preString = words.filter(e=>!!e).join(', ');
    const ind = preString.lastIndexOf(', ');
    if(ind!==-1){
        return preString.substring(0,ind)+' and '+preString.substring(ind+2)
    }
    return preString
}
console.log(formatWords(['one']))
// console.log(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
// console.log(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'")
// console.log(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'")
// console.log(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'")
// console.log(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'")
// console.log(formatWords([]),'', 'formatWords([]) should return ""')
// console.log(formatWords(null), '', 'formatWords(null) should return ""')
// console.log(formatWords(['']), '', 'formatWords([""]) should return ""')

if (require.main.path.includes('mocha')) {
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;
    
    describe("Format words into a sentence", () => {
      it("Fixed tests", () => {
        assert.strictEqual(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
        assert.strictEqual(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'")
        assert.strictEqual(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'")
        assert.strictEqual(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'")
        assert.strictEqual(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'")
        assert.strictEqual(formatWords([]),'', 'formatWords([]) should return ""')
        assert.strictEqual(formatWords(null), '', 'formatWords(null) should return ""')
        assert.strictEqual(formatWords(['']), '', 'formatWords([""]) should return ""')
      });
    })
}