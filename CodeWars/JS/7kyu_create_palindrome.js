// https://www.codewars.com/kata/5b7bd90ef643c4df7400015d/train/javascript

const _ = require('lodash');
function solve(s){
    return (
      _.zip(s.split(''), s.split('').reverse())
       .map(([a, b]) => (a.charCodeAt(0)) - (b.charCodeAt(0)))
    ).every(e => [-2, 0, 2].includes(e));
}

console.log(solve("abba"),true);
console.log(solve("abaazaba"),false);
console.log(solve("abccba"),true);
console.log(solve("adfa"),true);
console.log(solve("ae"),false);
console.log(solve("abzy"),false);
console.log(solve("ababbaba"),true);
console.log(solve("sq"),true);
console.log(solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm"),true);
