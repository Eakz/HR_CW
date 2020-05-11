// https://www.codewars.com/kata/51b6249c4612257ac0000005\

function solution(roman) {
    let res = [];
    const fdict = {IV:4,IX:9,XL:40,XC:90,CD:400,CM:900};
    Object.keys(fdict).forEach(a=>{
        if (roman.match(a)){
            roman=roman.replace(a,'');
            res.push(fdict[a])
        };
    });
    const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    roman.split('').forEach(a=>res.push(dict[a]));
    return res.reduce((acc,a)=>acc+=a);
}

console.log(solution("XXI")); // 21)
console.log(solution("I")); // 1)
console.log(solution("IV")); // 4)
console.log(solution("MMVIII")); // 2008)
console.log(solution("MDCLXVI")); // 1666)
