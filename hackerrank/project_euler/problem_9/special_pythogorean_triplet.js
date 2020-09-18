// https://www.hackerrank.com/contests/projecteuler/challenges/euler009/problem
const pTri = n => {
    let answer = -1;
    for (let a = 3; a < Math.ceil(n / 3) + 1; a++) {
        let b = Math.floor((n ** 2 - 2 * a * n) / (2 * n - 2 * a));
        let c = n - b - a;
        if (a ** 2 + b ** 2 === c ** 2) {
            answer = a * b * c > answer ? a * b * c : answer;
        }
    }
    return answer;
};
console.log(pTri(12), "===", 60);
console.log(pTri(4), "===", -1);
