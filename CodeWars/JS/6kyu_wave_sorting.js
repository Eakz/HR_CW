// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript

function waveSort(arr) {
    var t = arr.slice().sort((a, b) => a - b);
    arr.forEach((_, i) => (arr[i] = i % 2 ? t.shift() : t.pop()));
}
let arr = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];
waveSort(arr);
console.log(arr);
