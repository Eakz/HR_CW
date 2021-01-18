// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

const mxdiflg=(s1,s2)=>{
    const rmap = a =>a.map(e=>e.length)
    if(!s1.length||!s2.length) return -1
    let min1 = Math.min(...rmap(s1))
    let max1 = Math.max(...rmap(s2))
    let min2 = Math.min(...rmap(s2))
    let max2 = Math.max(...rmap(s1))
    let diff1=max1-min1
    let diff2=max2-min2
    return diff1>diff2?diff1:diff2
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);

    