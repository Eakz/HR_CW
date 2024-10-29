// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript

function shiftedDiff(first, second) {
    if (first.length !== second.length) {
        return -1;
    }
    if (first === second) {
        return 0;
    }
    for (let i = 0; i < first.length; i++) {
        const shift = first.slice(first.length-i) + first.slice(0, first.length-i);
        if (shift === second) {
            return i;
        }
    }
    return -1;
}


// function shiftedDiff(first, second) {
//     return (first.length == second.length) ? (second+second).indexOf(first) : -1;
//   }
// console.log(shiftedDiff('123456','123556'))
console.log(shiftedDiff('eecoff', 'coffee'), 4);
console.log(shiftedDiff('Moose', 'moose'), -1);
console.log(shiftedDiff("isn't", "'tisn"), 2);
console.log(shiftedDiff('Esham', 'Esham'), 0);
console.log(shiftedDiff(' ', ' '), 0);
console.log(shiftedDiff('hoop', 'pooh'), -1);
console.log(shiftedDiff('  ', ' '), -1);
if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(shiftedDiff('eecoff', 'coffee'), 4);
            Test.equal(shiftedDiff('Moose', 'moose'), -1);
            Test.equal(shiftedDiff("isn't", "'tisn"), 2);
            Test.equal(shiftedDiff('Esham', 'Esham'), 0);
            Test.equal(shiftedDiff(' ', ' '), 0);
            Test.equal(shiftedDiff('hoop', 'pooh'), -1);
            Test.equal(shiftedDiff('  ', ' '), -1);
        });
    });
}
