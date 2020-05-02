// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number) {
    const symbols = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    };
    let result = "";
    for (i of Object.keys(symbols).reverse()) {
        if (number / i >= 1) {
            let count = Math.floor(number / i);
            count <= 3 ? (count = Math.floor(count)) : (count = 3);
            result += symbols[i].repeat(count);
            number -= count * i;
        }
    }

    return result;
}
console.log(solution(1)); // 'I', '1 should, "I"')
console.log(solution(2)); // 'II', '2 should, "II"')
console.log(solution(3)); // 'III', '3 should, "III"')
console.log(solution(4)); // 'IV', '4 should, "IV"')
console.log(solution(5)); // 'V', '5 should, "V"')
console.log(solution(9)); // 'IX', '9 should, "IX"')
console.log(solution(10)); // 'X', '10 should, "X"')
console.log(solution(11)); // 'XI')
console.log(solution(19)); // 'XIX')
console.log(solution(22)); // 'XXII')
console.log(solution(15)); // 'XV')
console.log(solution(1000)); // 'M', '1000 should, "M"')
console.log(solution(1001)); // 'MI', '1001 should, "MI"')
console.log(solution(1990)); // 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007)); // 'MMVII', '2007 should, "MMVII"')
console.log(solution(2008)); // 'MMVIII', '2008 should, "MMVIII"')
console.log(solution(1994));
