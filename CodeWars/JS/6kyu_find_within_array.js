// https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript

var findInArray = function (array, iterator) {
    const tmp = array.map(iterator).indexOf(true);
    return tmp===undefined?-1: tmp;
};
var trueIfEven = function (v, i) {
    return v % 2 === 0;
};
var neverTrue = function (v, i) {
    return false;
};
var trueIfValueEqualsIndex = function (v, i) {
    return v === i;
};
var trueIfLengthEqualsIndex = function (v, i) {
    return v.length === i;
};

console.log(findInArray([], trueIfEven)); // -1)
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven)); // 3)
console.log(findInArray([2, 4, 6, 8], trueIfEven)); // 0)
console.log(findInArray([2, 4, 6, 8], neverTrue)); // -1)
console.log(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex)); // 4)
console.log(
    findInArray(
        ["one", "two", "three", "four", "five", "six"],
        trueIfLengthEqualsIndex,
    ),
); // 4)
console.log(findInArray(["bc", "af", "d", "e"], trueIfLengthEqualsIndex)); // -1)
