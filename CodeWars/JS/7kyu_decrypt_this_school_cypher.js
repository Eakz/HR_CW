// https://www.codewars.com/kata/5cd48cffaae6e30018943175/train/javascript

const decrypt = (str) =>[...str.replace(/\'\d+\'/g,v=>String.fromCharCode(Number(v.slice(1,-1))))].reverse().join('')
console.log(decrypt("'101''99''105''108''65'"), "Alice")
console.log(decrypt("'98''111''66'"), "Bob")
console.log(decrypt("30 71"), "17 03")  