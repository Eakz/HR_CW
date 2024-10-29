// https://www.codewars.com/kata/59b7571bbf10a48c75000070/train/javascript

function tops(msg) {
    let i = 1;
    let mx = 2;
    let result = '';
    const length = msg.length;
    while (i < length) {
        result += msg[i];
        i += mx;
        mx++;
    }
    return [...result].reduce((acc, e, i) => (i % 2 === 1 ? acc : e+ acc), '');
}

if (require.main.path.includes('mocha')) {
    const test = require('chai').assert.equal;
    describe('Tests', () => {
        it('test', () => {
            test('', tops(''));
            test('2', tops('12'));
            test('3pgb', tops('abcdefghijklmnopqrstuvwxyz12345'));
            test('M3pgb', tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'));
        });
    });
} else {
    console.log(tops(''), '');
    console.log(tops('12'), '2');
    console.log(tops('abcdefghijklmnopqrstuvwxyz12345'), '3pgb');
    console.log(tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'), 'M3pgb');
}
// 1  3 6   10   15   21   28
