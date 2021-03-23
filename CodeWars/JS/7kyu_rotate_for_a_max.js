// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript


maxRot = n =>
   Math.max(...(n = String(n).split(''))
      .reduce((r, _, i) => 
        r.concat([r[i].slice(0, i)
          .concat(r[i].slice(i + 1))
          .concat(r[i].slice(i, i + 1))]), [n])
      .map(e => e.join('')));


// console.log(maxRot(38458215), 85821534);
// console.log(maxRot(195881031), 988103115);
// console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);
