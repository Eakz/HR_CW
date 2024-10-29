// https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

function isNarcissistic(n) {
    return [...n.toString()].reduce((acc,e)=>{
      return acc + Math.pow(Number(e),n.toString().length)
    },0)===n
}

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Narcissistic Numbers', () => {
        it('example tests', () => {
            assert.strictEqual(isNarcissistic(153), true);
            assert.strictEqual(isNarcissistic(1), true);
            assert.strictEqual(isNarcissistic(435), false);
            assert.strictEqual(isNarcissistic(370), true);
            assert.strictEqual(isNarcissistic(324), false);
            assert.strictEqual(isNarcissistic(371), true);
            assert.strictEqual(isNarcissistic(4328), false);
            assert.strictEqual(isNarcissistic(407), true);
            assert.strictEqual(isNarcissistic(3248), false);
            assert.strictEqual(isNarcissistic(1634), true);
            assert.strictEqual(isNarcissistic(8208), true);
            assert.strictEqual(isNarcissistic(9474), true);
            assert.strictEqual(isNarcissistic(54748), true);
            assert.strictEqual(isNarcissistic(92727), true);
            assert.strictEqual(isNarcissistic(93084), true);
            assert.strictEqual(isNarcissistic(548834), true);
            assert.strictEqual(isNarcissistic(1741725), true);
            assert.strictEqual(isNarcissistic(4210818), true);
            assert.strictEqual(isNarcissistic(9800817), true);
            assert.strictEqual(isNarcissistic(234229983), false);
            assert.strictEqual(isNarcissistic(9926315), true);
            assert.strictEqual(isNarcissistic(24678050), true);
            assert.strictEqual(isNarcissistic(88593477), true);
            assert.strictEqual(isNarcissistic(11513221922401), false);
            assert.strictEqual(isNarcissistic(146511208), true);
            assert.strictEqual(isNarcissistic(472335975), true);
            assert.strictEqual(isNarcissistic(26548238692458), false);
            assert.strictEqual(isNarcissistic(534494836), true);
            assert.strictEqual(isNarcissistic(912985153), true);
            assert.strictEqual(isNarcissistic(4679307774), true);
        });
    });
} else {
    console.log(isNarcissistic(153), true);
    console.log(isNarcissistic(1), true);
    console.log(isNarcissistic(435), false);
    console.log(isNarcissistic(370), true);
    console.log(isNarcissistic(324), false);
    console.log(isNarcissistic(371), true);
    console.log(isNarcissistic(4328), false);
    console.log(isNarcissistic(407), true);
    console.log(isNarcissistic(3248), false);
    console.log(isNarcissistic(1634), true);
    console.log(isNarcissistic(8208), true);
    console.log(isNarcissistic(9474), true);
    console.log(isNarcissistic(54748), true);
    console.log(isNarcissistic(92727), true);
    console.log(isNarcissistic(93084), true);
    console.log(isNarcissistic(548834), true);
    console.log(isNarcissistic(1741725), true);
    console.log(isNarcissistic(4210818), true);
    console.log(isNarcissistic(9800817), true);
    console.log(isNarcissistic(234229983), false);
    console.log(isNarcissistic(9926315), true);
    console.log(isNarcissistic(24678050), true);
    console.log(isNarcissistic(88593477), true);
    console.log(isNarcissistic(11513221922401), false);
    console.log(isNarcissistic(146511208), true);
    console.log(isNarcissistic(472335975), true);
    console.log(isNarcissistic(26548238692458), false);
    console.log(isNarcissistic(534494836), true);
    console.log(isNarcissistic(912985153), true);
    console.log(isNarcissistic(4679307774), true);
}
