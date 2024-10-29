// https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript
function battle(x, y) {
    const getPower = s => [...s].reduce((acc, e) => acc + e.charCodeAt() - 64, 0);
    const [val1, val2] = [getPower(x), getPower(y)];
    return val1 === val2 ? 'Tie!' : val1 > val2 ? x : y;
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Basic Tests', function () {
        it('Test1', () => {
            Test.equal(battle('AAA', 'Z'), 'Z', 'Unfair fight!');
        });
        it('Test2', () => {
            Test.equal(battle('ONE', 'TWO'), 'TWO', 'Unfair fight!');
        });
        it('Test3', () => {
            Test.equal(battle('ONE', 'NEO'), 'Tie!', 'Unfair fight!');
        });
        it('Test4', () => {
            Test.equal(battle('FOUR', 'FIVE'), 'FOUR', 'Unfair fight!');
        });
    });
} else {
    console.log(battle('AAA', 'Z'), 'Z', 'Unfair fight!');
    console.log(battle('ONE', 'TWO'), 'TWO', 'Unfair fight!');
    console.log(battle('ONE', 'NEO'), 'Tie!', 'Unfair fight!');
    console.log(battle('FOUR', 'FIVE'), 'FOUR', 'Unfair fight!');
}
