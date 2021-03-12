// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

const sumSquareEvenRootOdd = ns => Number(ns.reduce((acc,e)=>acc+(e%2===0?e**2:e**0.5),0).toFixed(2))


console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))