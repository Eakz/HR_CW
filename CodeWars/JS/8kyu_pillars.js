// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(num_pill, dist, width) {
    return num_pill===1?0:(num_pill-1)*dist*100+(num_pill-2)*width
}

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Basic tests', function () {
        it('Testing for number of pillars: 1, distance: 10 m and width: 10 cm', function () {
            Test.equal(pillars(1, 10, 10), 0);
        });
        it('Testing for number of pillars: 2, distance: 20 m and width: 25 cm', function () {
            Test.equal(pillars(2, 20, 25), 2000);
        });
        it('Testing for number of pillars: 11, distance: 15 m and width: 30 cm', function () {
            Test.equal(pillars(11, 15, 30), 15270);
        });
    });
}
