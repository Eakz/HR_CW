// https://www.codewars.com/kata/5893e0c41a88085c330000a0/train/javascript

function shapeArea(n) {
    return Math.pow(n,2) + Math.pow(n-1,2)
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Basic Tests', function () {
        it('It should works for basic tests.', function () {
            Test.equal(shapeArea(2), 5);

            Test.equal(shapeArea(3), 13);

            Test.equal(shapeArea(1), 1);

            Test.equal(shapeArea(5), 41);
        });
    });
} else {
    // console.log(shapeArea(2), 5);
    console.log(shapeArea(3), 13);
    console.log(shapeArea(1), 1);
    console.log(shapeArea(5), 41);
}
