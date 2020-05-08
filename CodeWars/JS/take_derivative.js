// https://www.codewars.com/kata/5963c18ecb97be020b0000a2

const derive=(c,e)=> {
  return `${c*e}x^${e-1}`
}

console.log(derive(7,8)) // "56x^7");
console.log(derive(5,9)) // "45x^8");
