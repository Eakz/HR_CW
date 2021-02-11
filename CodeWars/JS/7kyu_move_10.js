// https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

moveTen=s=>[...s].map(e=>String.fromCharCode((e.charCodeAt()-87)%26+97)).join('')

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");
