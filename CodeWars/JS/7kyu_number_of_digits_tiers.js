// https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript

const createArrayOfTiers=n=>[...n.toString()].map((_,i)=>n.toString().slice(0,i+1))

console.log(createArrayOfTiers(420), ["4", "42", "420"]);
console.log(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);
