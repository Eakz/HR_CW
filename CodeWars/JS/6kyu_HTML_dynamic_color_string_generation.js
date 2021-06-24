// https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript

generateColor=()=>`#${Math.floor(Math.random()*2**24).toString(16)}`

console.log(generateColor().substring(0, 1), "#", "should start with the symbol #");

  