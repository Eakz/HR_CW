// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
    return str.endsWith(ending);
}



console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)