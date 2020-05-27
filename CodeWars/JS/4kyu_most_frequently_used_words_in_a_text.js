/* TODO  SOLVE IT*/
// FIXME!
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e','d','a'])
console.log(topThreeWords("a a c b b")); // ['a','b','c'])
console.log(
    topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
); //['e','ddd','aa'])
console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"])
console.log(topThreeWords("  , e   .. ")); // ["e"])
console.log(topThreeWords("  ...  ")); // [])
console.log(topThreeWords("  '  ")); // [])
console.log(
    topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
); // ['a','of','on'])
