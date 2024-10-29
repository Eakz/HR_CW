// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
    return Math.min(...list);
};

var max = function (list) {
    return Math.max(...list);
};

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert.equal;
    describe('Test', function () {
        it('Examples', function () {
            Test(min([-52, 56, 30, 29, -54, 0, -110]), -110);
            Test(min([42, 54, 65, 87, 0]), 0);
            Test(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
            Test(max([5]), 5);
        });
    });
} else {
    console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    console.log(min([42, 54, 65, 87, 0]), 0);
    console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
    console.log(max([5]), 5);
}
