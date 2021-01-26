// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string){
    return string.split('').reduce((acc,e)=>acc+e.charCodeAt()-96,0)
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
