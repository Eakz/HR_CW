// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
    if(n === 1) return n;
    return n + halvingSum(Math.floor(n/2));
}

console.log(halvingSum(25)) // 47);
console.log(halvingSum(127)) // 247);
