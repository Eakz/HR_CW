// https://www.codewars.com/kata/52dbae61ca039685460001ae

function change(string){
  const letters='abcdefghijklmnopqrstuvwxyz';
  const result = '0'.repeat(26).split('');
  for(i of string.toLowerCase()){
    if (letters.includes(i)){
      result[letters.indexOf(i)]='1';
    }
  }
  return result.join('');
  }

console.log( change("a **&  bZ")) // "11000000000000000000000001" );