// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript


const triangle = row => row.length > 1
  ? triangle(
    [...row].slice(1).reduce((str, el, idx) => el !== row[idx] 
      ? str + 'RGB'.replace(el, ``).replace(row[idx], ``) 
      : str + el, ``)
    ) 
  : row;

// console.log  (triangle('GB'), 'R');
console.log(triangle('RRR'), 'R');
console.log(triangle('RGBG'), 'B');
// console.log(triangle('RBRGBRB'), 'G');
// console.log(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
// console.log(triangle('B'), 'B');