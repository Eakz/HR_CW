// https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

const initials = (n)=>n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
console.log(initials("code wars")); // 'C.Wars');
console.log(initials("Barack hussain obama")); // 'B.H.Obama');
console.log(initials("barack hussain Obama")); // 'B.H.Obama');
