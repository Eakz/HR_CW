// https://www.codewars.com/kata/5af43416882143534300142c/train/javascript

function isLeapYear(duration, year) {
    const totalDays = duration * year;
    return totalDays === Math.floor(totalDays);
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Basic Tests', function () {
        it('should return if the given year is a leap year', function () {
            Test.equal(
                isLeapYear(365.25, 2018),
                false,
                '2018 is not a leap year on Earth',
            );
            Test.equal(isLeapYear(365.25, 2020), true, '2020 is a leap year on Earth');
            Test.equal(isLeapYear(124.5, 102), true);
            Test.equal(isLeapYear(124.125, 102), false);
        });
    });
} else {
    console.log(isLeapYear(365.25, 2018), false, '2018 is not a leap year on Earth');
    console.log(isLeapYear(365.25, 2020), true, '2020 is a leap year on Earth');
    console.log(isLeapYear(124.5, 102), true);
    console.log(isLeapYear(124.125, 102), false);
}
