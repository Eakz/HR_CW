// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
const dict = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
};
function encode(string, words = dict) {
    return string
        .split("")
        .map((letter) =>
            Object.keys(words).includes(letter) ? words[letter] : letter,
        )
        .join("");
}

function decode(string) {
    const words={};
    Object.keys(dict).forEach((a) => {(words[dict[a]] = a)});
    return encode(string,words);
}


// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
//turn numbers back into vowels
function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }

console.log(encode("hello")); //  'h2ll4');
console.log(encode("How are you today?")); // 'H4w 1r2 y45 t4d1y?');
console.log(encode("This is an encoding test.")); //  'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode("h2ll4")); //  'hello');
