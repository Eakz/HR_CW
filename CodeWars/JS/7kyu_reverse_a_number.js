// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

const reverseNumber = n=>Number(String(Math.abs(n)).split('').reverse().join(''))*(n<0?-1:1)

