// https://www.codewars.com/kata/632408defa1507004aa4f2b5/train/javascript

class Class {
    static calls = 0;
    static getNumber() {
        return (this.calls = this.calls ? this.calls * 2 : 1);
    }
}

if (require.main.path.includes('mocha')) {
    describe('Tests suite', function () {
        const { strictEqual } = require('chai').assert;

        it('sample tests', function () {
            strictEqual(Class.getNumber(), 1, '1st call should return 1');
            strictEqual(Class.getNumber(), 2, '2nd call should return 2');
            strictEqual(Class.getNumber(), 4, '3rd call should return 4');
            strictEqual(Class.getNumber(), 8, '4th call should return 8');
            strictEqual(Class.getNumber(), 16, '5th call should return 16');
        });
    });
} else {
    console.log(Class.getNumber(), 1, '1st call should return 1');
    console.log(Class.getNumber(), 2, '2nd call should return 2');
    console.log(Class.getNumber(), 4, '3rd call should return 4');
    console.log(Class.getNumber(), 8, '4th call should return 8');
    console.log(Class.getNumber(), 16, '5th call should return 16');
}
