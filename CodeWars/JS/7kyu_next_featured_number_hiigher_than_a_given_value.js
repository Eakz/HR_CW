// https://www.codewars.com/kata/56abc5e63c91630882000057/train/javascript

function nextNumb(val) {
    if (val.toString().length >= 10)
        return 'There is no possible number that fulfills those requirements';
    let coef = Math.ceil(val / 3);
    let curnext = coef * 3;
    if(curnext===val) curnext+=3;
    const evaluate = (v = 0) => {
        if (v % 2 === 0) return false;
        const v2StrArr = v.toString().split('');
        const noduplicatesLen = Array.from(new Set(v2StrArr)).length;
        if (noduplicatesLen !== v2StrArr.length) return false;
        return true;
    };
    while (true) {
        if (evaluate(curnext)) {
            return curnext;
        }
        curnext += 3;
    }
}

if (require.main.path.includes('mocha')) {
    describe('Example Tests', function () {
        Test.assertEquals(nextNumb(12), 15);
        Test.assertEquals(nextNumb(13), 15);
        Test.assertEquals(nextNumb(99), 105);
        Test.assertEquals(nextNumb(999999), 1023459);
        Test.assertEquals(
            nextNumb(9999999999),
            'There is no\
         possible number that fulfills those requirements',
        );
    });
} else {
    console.log(nextNumb(12), 15);
    console.log(nextNumb(13), 15);
    console.log(nextNumb(99), 105);
    console.log(nextNumb(999999), 1023459);
    console.log(
        nextNumb(9999999999),
        'There is no\
     possible number that fulfills those requirements',
    );
}
