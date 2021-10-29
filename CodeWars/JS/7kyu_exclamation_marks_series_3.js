// https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript

function remove(s){
    const last= s.split(/[^!]/).slice(-1)[0];
    return s.replace(/!/g,'')+last
  }
  // Stolen from CW
  const remove = $ => $.replace(/!+([^!])/g,'$1')

console.log(remove("Hi!") , "Hi!")
console.log(remove("Hi!!!") ,"Hi!!!")
console.log(remove("!Hi") , "Hi")
console.log(remove("!Hi!") , "Hi!")
console.log(remove("Hi! Hi!") , "Hi Hi!")
console.log(remove("Hi") , "Hi")
