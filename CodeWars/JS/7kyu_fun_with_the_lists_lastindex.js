// https://www.codewars.com/kata/581c867a33b9fe732e000076/train/javascript

function lastIndexOf(head, value, foundIndex = -1, currentIndex = 0) {
    if (!head || !head.data) {
        return foundIndex;
    }
    let found = foundIndex;
    if (head.data === value) {
        found = currentIndex;
    }
    return lastIndexOf(head.next, value, found, currentIndex + 1);
}
console.log(lastIndexOf(null, 17), -1);
console.log(lastIndexOf(listFromArray([1, 2, 3]), 2), 1);
console.log(lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa'), 0);
console.log(lastIndexOf(listFromArray([17, '17', 1.2]), 17), 0);
console.log(lastIndexOf(listFromArray([17, '17', 1.2]), '17'), 1);
console.log(lastIndexOf(listFromArray([1, 2, 3, 3]), 3), 3);

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('lastIndexOf', function () {
        it('basic tests', function () {
            Test.equal(lastIndexOf(null, 17), -1);
            Test.equal(lastIndexOf(listFromArray([1, 2, 3]), 2), 1);
            Test.equal(lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa'), 0);
            Test.equal(lastIndexOf(listFromArray([17, '17', 1.2]), 17), 0);
            Test.equal(lastIndexOf(listFromArray([17, '17', 1.2]), '17'), 1);
            Test.equal(lastIndexOf(listFromArray([1, 2, 3, 3]), 3), 3);
        });
    });
}
