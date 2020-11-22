// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
// Option 1 easy to read
var arrayLeaders = numbers => {
    const lastElement = numbers[numbers.length - 1];
    let result = lastElement > 0 ? [lastElement] : [];
    numbers.reverse().reduce((acc, e) => {
        if (e > acc) result.push(e);
        return acc + e;
    });
    return result.reverse();
};
// Option 2 compressed
arrayLeaders = n => n.filter((e, i) => e > n.slice(i + 1).reduce((a, b) => a + b, 0));

console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
console.log(arrayLeaders([-1, -29, -26, -2]), [-1]);
console.log(arrayLeaders([-36, -12, -27]), [-36, -12]);
console.log(arrayLeaders([5, -2, 2]), [5, 2]);
console.log(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
