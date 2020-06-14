// https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript

const reject = (array, predicate) => {
    return array.filter((a) => !predicate(a));
};

console.log(
    reject([1, 2, 3, 4, 5, 6], function (num) {
        return num % 2 == 0;
    }),
); // [1, 3, 5]);
