// https://www.codewars.com/kata/589f8bb8423ac3576a00000b/train/javascript

const nonsense = s =>s.replace(/(trex)*(raptor)*/gi,'').split('').map(e=>'01234'.includes(e)?['a','e','i','o','u'][e]:e).map((e,i)=>i===0?e.toUpperCase():e.toLowerCase()).join('').replace(/\s+i\s+/g,' I ')+(s.slice(-1)==='.'?'':'.')

console.log(nonsense("d2n3S04Rs 0r1 c33L."),
  "Dinosaurs are cool.")

console.log(nonsense("h1Ll3 Wtrex3raptorRLD"),
  "Hello world.")

console.log(nonsense("i think therefore i am"),
  "I think therefore I am.")