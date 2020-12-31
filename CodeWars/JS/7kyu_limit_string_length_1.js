// https://www.codewars.com/kata/5208fc3cb613bc725f000142/train/javascript

const solution = (s, l) => s.slice(0, l) + (s.length > l ?'...':'');

console.log(solution("Hello", 8));
