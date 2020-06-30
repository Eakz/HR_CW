// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

const nbDig=(n, d)=>[...Array(n+1).keys()].map(el=>el**2).join('').split('').filter(e=>e==d).length;
console.log(nbDig(5750, 0)); // 4700)
console.log(nbDig(11011, 2)); // 9481)
console.log(nbDig(12224, 8)); // 7733)
console.log(nbDig(11549, 1)); // 11905)
