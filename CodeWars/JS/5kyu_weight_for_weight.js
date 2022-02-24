// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(strng) {
    const sumDigs = s => s.split('').reduce((acc, e) => acc + Number.parseInt(e), 0);
    return strng
        .trim()
        .split(' ')
        .map(mappedE => mappedE.trim())
        .filter(filteredE => !!filteredE)
        .sort((a, b) => {
            const val1 = sumDigs(a);
            const val2 = sumDigs(b);
            return val1 === val2 ? (a > b ? 1 : -1) : val1 - val2;
        })
        .join(' ');
}

// console.log(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');
console.log(
    orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
    '11 11 2000 10003 22 123 1234000 44444444 9999',
);
if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai');
    describe('Order Weights', function () {
        it('Basic tests', function () {
            Test.assert.equal(
                orderWeight('103 123 4444 99 2000'),
                '2000 103 123 4444 99',
            );
            Test.assert.equal(
                orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
                '11 11 2000 10003 22 123 1234000 44444444 9999',
            );
        });
    });
}
