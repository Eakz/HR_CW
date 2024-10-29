// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript

function yearDays(_year) {
    const year = Math.abs(_year)
    return `${_year} has ${((year%400===0)||(year%4===0&&year%100!==0))?'366':'365'} days`;
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai');
    describe('Tests', () => {
        it('test', () => {
            Test.assert.equal(yearDays(0), '0 has 366 days');
            Test.assert.equal(yearDays(-64), '-64 has 366 days');
            Test.assert.equal(yearDays(2016), '2016 has 366 days');
            Test.assert.equal(yearDays(1974), '1974 has 365 days');
            Test.assert.equal(yearDays(-10), '-10 has 365 days');
            Test.assert.equal(yearDays(666), '666 has 365 days');
            Test.assert.equal(yearDays(1857), '1857 has 365 days');
        });
    });
} else {
    console.log(yearDays(0), '0 has 366 days');
    console.log(yearDays(1112), '1112 has 365 days');
    console.log(yearDays(-64), '-64 has 366 days');
    console.log(yearDays(2016), '2016 has 366 days');
    console.log(yearDays(1974), '1974 has 365 days');
    console.log(yearDays(-10), '-10 has 365 days');
    console.log(yearDays(666), '666 has 365 days');
    console.log(yearDays(1857), '1857 has 365 days');
}
