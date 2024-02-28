// https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript

function amountOfPages(summary) {
    let curNum = 0;

    while (summary > 0) {
        curNum++;
        summary -= curNum.toString().length;
    }

    return curNum;
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;

    describe('Solution', function () {
        it('should test for something', function () {
            // Test.assertEquals(1 + 1, 2);
            // assert.strictEqual(1 + 1, 2);
            assert.strictEqual(amountOfPages(5), 5);
            assert.strictEqual(amountOfPages(25), 17);
            assert.strictEqual(amountOfPages(1095), 401);
            assert.strictEqual(amountOfPages(185), 97);
            assert.strictEqual(amountOfPages(660), 256);
        });
    });
} else {
    console.log(amountOfPages(5), 5);
    console.log(amountOfPages(25), 17);
    console.log(amountOfPages(1095), 401);
    console.log(amountOfPages(185), 97);
    console.log(amountOfPages(660), 256);
}
