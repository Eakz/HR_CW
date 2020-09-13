// https://www.hackerrank.com/challenges/diagonal-difference/problem
function diagonalDifference(arr) {
    let arr2 = [...arr.map(e => e.reverse())].reverse();
    let sum1 = 0,
        sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr2[i][i];
    }
    return Math.abs(sum1 - sum2);
}
