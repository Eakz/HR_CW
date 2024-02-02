// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

function multiply(number) {
    return number * 5**String(Math.abs(number)).length;
}

if (require.main.path.includes('mocha')) {
    describe('Basic Tests', () => {
        Test.assertEquals(multiply(10), 250);
        Test.assertEquals(multiply(5), 25);
        Test.assertEquals(multiply(200), 25000);
        Test.assertEquals(multiply(0), 0);
        Test.assertEquals(multiply(-2), -10);
    });
} else {
    console.log(multiply(10), 250);
    console.log(multiply(5), 25);
    console.log(multiply(200), 25000);
    console.log(multiply(0), 0);
    console.log(multiply(-2), -10);
    console.log(multiply(-71), -1775)
}
