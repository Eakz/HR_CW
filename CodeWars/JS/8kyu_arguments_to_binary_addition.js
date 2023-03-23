// https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

function arr2bin(arr){
    if(arr.includes(NaN)) return 'NaN'
    return arr.reduce((acc, cur) => acc + (parseInt(cur)===cur?cur: 0),0).toString(2)
  }

  if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');
    describe("Tests", () => {
        it("test", () => {
          let actual = arr2bin([1,2]);
          assertReturn(actual);
          assert.strictEqual(actual, "11")
          assert.strictEqual(arr2bin([1,2,3,4,5]), "1111")
          assert.strictEqual(arr2bin([1,10,100,1000]), "10001010111")
          assert.strictEqual(arr2bin([null]), "0")
          assert.strictEqual(arr2bin([true,true,false,15]),"1111")
        });
        function assertReturn(v) {
          assert.isDefined(v, "Your function did not return any value. Did you log it to the console instead?");
        }
      });
      
}else {
    console.log(arr2bin([1,2]), "11")
    console.log(arr2bin([1,2,3,4,5]), "1111")
    console.log(arr2bin([1,10,100,1000]), "10001010111")
    console.log(arr2bin([null]), "0")
    console.log(arr2bin([true,true,false,15]),"1111")
}