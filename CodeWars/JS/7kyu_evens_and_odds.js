// https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript

const evensAndOdds = n => (n % 2 === 0 ? n.toString(2) : n.toString(16));

console.log(evensAndOdds(2), " === ", "10");
console.log(evensAndOdds(13), " === ", "d");
