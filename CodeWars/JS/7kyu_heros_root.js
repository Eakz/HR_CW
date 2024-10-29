function intRac(num, guess) {
    const calc=(n,x)=>Math.floor((x + n / x) / 2);
    let a = calc(num, guess);
    let u = guess;
    const answers = [guess,a];
    while(Math.abs(a-u)>1){
        u=a;
        a=calc(num, a);
        if(!answers.includes(a)){
            answers.push(a);
        }

    }
    return answers.length;
}

if (require.main.path.includes('mocha')) {
    describe("Hero's root", function () {
        const { assert } = require('chai');

        function doTest(n, guess, expected) {
            const message = `for n = ${n} and guess = ${guess}\n`;
            const actual = intRac(n, guess);
            assert.strictEqual(actual, expected, message);
        }

        it('Basic Tests', function () {
            doTest(25, 1, 4);
            doTest(125348, 300, 3);
            doTest(236, 12, 2);
            doTest(48981764, 8000, 3);
            doTest(6999, 700, 6);
            doTest(16000, 400, 5);
        });
    });
} else {
    console.log(intRac(16000, 400),5)
    console.log(intRac(25, 1), 4);
    // console.log(intRac(125348, 300), 3);
    // console.log(intRac(236, 12), 2);
    // console.log(intRac(48981764, 8000), 3);
    // console.log(intRac(6999, 700), 6);
    // console.log(intRac(16000, 400), 5);
}
