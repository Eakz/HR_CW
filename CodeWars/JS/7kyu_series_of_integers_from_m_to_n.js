// https://www.codewars.com/kata/5841f680c5c9b092950001ae
// function generateIntegers(m, n) {
//     let result = [];
//     for (let i = m; i < n + 1; i++) {
//         result.push(i);
//     }
//     return result;
// }
const generateIntegers=(m,n)=>[...Array(n+1).keys()].slice(m);

console.log(generateIntegers(2, 5)); // [2, 3, 4, 5]);
