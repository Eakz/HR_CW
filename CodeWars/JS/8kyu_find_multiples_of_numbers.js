// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

const findMultiples = (integer, limit) => {
    const result = [];
    let i = 1;
    while(true){
        const current = i * integer;
        if (current > limit) return result;
        result.push(current);
        i++
    }
};

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Basic Tests', () => {
        Test.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25]);
        Test.sameOrderedMembers(findMultiples(1, 2), [1, 2]);
        Test.sameOrderedMembers(findMultiples(5, 7), [5]);
        Test.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
        Test.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44]);
    });
} else {
    console.log(findMultiples(5, 25), [5, 10, 15, 20, 25]);
    console.log(findMultiples(1, 2), [1, 2]);
    console.log(findMultiples(5, 7), [5]);
    console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
    console.log(findMultiples(11, 54), [11, 22, 33, 44]);
}
