// https://www.codewars.com/kata/56dbb6603e5dd6543c00098d/train/javascript

function trackSum(arr) {
    let s = [],
        f = [];
    s.push(arr.reduce((a, b) => a + b));
    let a1 = [...new Set(arr)];
    s.push(a1.reduce((a, b) => a + b));
    a1.sort((a, b) => b - a);
    for (let i = 1; i < a1.length; i++) {
        f.push(a1[i - 1] - a1[i]);
    }
    s.push(f.reduce((a, b) => a + b));
    f = [...new Set(f)];
    s.push(f.reduce((a, b) => a + b));

    return [s, f];
}

var arr = [5, 3, 6, 10, 5, 2, 2, 1];
console.log(trackSum(arr), [
    [34, 27, 9, 7],
    [4, 1, 2],
]);

// Case 2
var arr = [-3, -5, 8, -11, 22, 16, -11, 22, -8, 8];
console.log(trackSum(arr), [
    [38, 19, 33, 30],
    [6, 8, 11, 2, 3],
]);

// Case 3
var arr = [2, 3, 4, 1, 3, 2, -5, 4, 2, 3, 1, -5];
console.log(trackSum(arr), [
    [15, 5, 9, 7],
    [1, 6],
]);

// Case 4
var arr = [4, 4, 4, 4, 4, 4, 4, 1];
console.log(trackSum(arr), [[29, 5, 3, 3], [3]]);
