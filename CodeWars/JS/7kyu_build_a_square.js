// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

const generateShape=n=>('+'.repeat(n)+'\n').repeat(n).trim()

// console.log( generateShape(8) == '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
console.log(generateShape(3));