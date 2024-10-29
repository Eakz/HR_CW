// https://www.codewars.com/kata/582933a3c983ca0cef0003de/train/javascript

function distributionOfCandy(candies=[], cycle=0) {
    if(new Set(candies).size===1){
        return [cycle, candies[0]]
    }
    function distribute(list){
        const additions = new Array(list.length);
        const result = [];
        for (let i=0;i<list.length;i++){
            const currentValue = Math.ceil(list[i]/2);
            result.push(currentValue)
            additions[(i+1)%list.length]=currentValue;
        }
        return result.map((e,i)=>e+additions[i])
    }
    return distributionOfCandy(distribute(candies),cycle+1)
}

if (require.main.path.includes('mocha')) {
    const Test = require('@codewars/test-compat');

    describe('Basic Tests', function () {
        it('It should works for basic tests', function () {
            Test.assertDeepEquals(distributionOfCandy([1, 2, 3, 4, 5]), [6, 6]);

            Test.assertDeepEquals(
                distributionOfCandy([10, 2, 8, 22, 16, 4, 10, 6, 14, 20]),
                [17, 18],
            );

            Test.assertDeepEquals(distributionOfCandy([1, 1, 1, 1, 1]), [0, 1]);

            Test.assertDeepEquals(distributionOfCandy([1, 1]), [0, 1]);

            Test.assertDeepEquals(distributionOfCandy([1, 2]), [1, 2]);

            Test.assertDeepEquals(distributionOfCandy([1, 3]), [1, 3]);

            Test.assertDeepEquals(distributionOfCandy([3, 1]), [1, 3]);

            Test.assertDeepEquals(distributionOfCandy([3, 3]), [0, 3]);
        });
    });
} else {
    console.log(distributionOfCandy([1, 2, 3, 4, 5]), [6, 6]);
    console.log(distributionOfCandy([10, 2, 8, 22, 16, 4, 10, 6, 14, 20]), [17, 18]);
    console.log(distributionOfCandy([1, 1, 1, 1, 1]), [0, 1]);
    console.log(distributionOfCandy([1, 1]), [0, 1]);
    console.log(distributionOfCandy([1, 2]), [1, 2]);
    console.log(distributionOfCandy([1, 3]), [1, 3]);
    console.log(distributionOfCandy([3, 1]), [1, 3]);
    console.log(distributionOfCandy([3, 3]), [0, 3]);
}
