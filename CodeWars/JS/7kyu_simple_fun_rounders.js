// https://www.codewars.com/kata/58846d50f54f021d90000012

function rounders(value) {
    const strArr = [...String(value)].reverse();
    let crossOver =0;
    for(let i=0;i<strArr.length; i++){
        const num = +strArr[i]+crossOver;
        if(num>4){
            crossOver=1
        }else{
            crossOver=0
        }
        if(i<(strArr.length-1)){
            strArr[i]=0
        }else{
            strArr[i]=num
        }

    }
    return +strArr.reverse().join('')

}

if (require.main.path.includes('mocha')) {
    const Test = require('chai');

    describe('Basic Tests', function () {
        it('It should works for basic tests.', function () {
            Test.assert.equal(rounders(15), 20);
            Test.assert.equal(rounders(1234), 1000);
            Test.assert.equal(rounders(1445), 2000);
            Test.assert.equal(rounders(14), 10);
            Test.assert.equal(rounders(99), 100);
            Test.assert.equal(rounders(10), 10);
        });
    });
} else {
    console.log(rounders(15), 20);
    console.log(rounders(1234), 1000);
    console.log(rounders(1445), 2000);
    console.log(rounders(14), 10);
    console.log(rounders(99), 100);
    console.log(rounders(10), 10);
}
