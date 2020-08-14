// https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript

const wordPattern = (word)=>{
    word=word.toLowerCase()
    const set = [...new Set(word)]
    return word.split('').map(e=>set.indexOf(e)).join('.')
  }


console.log(wordPattern("hello")," === ", "0.1.2.2.3");
console.log(wordPattern("heLlo")," === ", "0.1.2.2.3");
console.log(wordPattern("helLo")," === ", "0.1.2.2.3");
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia")," === ", "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");

