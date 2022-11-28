// https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript
function args_count(){
    return arguments.length
}
if(require.main.path.includes('mocha')){
    const Test = require('chai').assert
    describe("Tests", () => {
        it("test", () => {
      Test.equal(args_count(1, 2), 2);
      Test.equal(args_count(), 0);
      Test.equal(args_count('A', 'B', 'C'), 3);
      Test.equal(args_count(["foo", "bar"]), 1);
        });
      });
      
}else{
    console.log(args_count(1, 2), 2);
    console.log(args_count(), 0);
    console.log(args_count('A', 'B', 'C'), 3);
    console.log(args_count(["foo", "bar"]), 1);
}