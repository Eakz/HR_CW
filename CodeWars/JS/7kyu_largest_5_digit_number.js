// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
    let answer = 0;

    for (let i = 0; i < digits.length; i++) {
        let number = digits.substr(i, 5);
        if (Number(number) > answer) {
            answer = Number(number);
        }
    }
    return answer;
}

console.log(solution(283910)); // 91
console.log(solution(1234567890)); // 67890
