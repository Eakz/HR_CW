// https://www.codewars.com/kata/58ca77b9c0d640ecd2000b1e/train/javascript
const procedure = n =>
    Array((100 / n) | 0)
        .fill('')
        .reduce(
            (acc, _, i) =>
                acc +
                [...`${(i + 1) * n}`].reduce((acc2, e) => Number.parseInt(e) + acc2, 0),
            0,
        );

console.log(procedure(30), 18);
console.log(procedure(12), 72);
console.log(procedure(49), 30);
console.log(procedure(17), 48);
console.log(procedure(10), 46);

if (require.main.path.includes('mocha')) {
    const Test = require('chai');
    describe('Solution', function () {
        it('Fixed Test', function () {
            Test.assert.equal(procedure(30), 18);
            Test.assert.equal(procedure(12), 72);
            Test.assert.equal(procedure(49), 30);
            Test.assert.equal(procedure(17), 48);
            Test.assert.equal(procedure(10), 46);
        });
    });
}
