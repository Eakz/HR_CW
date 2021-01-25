// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow=s=>{let sorted=s.split(' ').sort((a,b)=>Number(a)-Number(b));return `${sorted.slice(-1)[0]} ${sorted[0]}`}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
