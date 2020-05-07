// https://www.codewars.com/kata/5d50e3914861a500121e1958

function addLetters(...letters) {
    return letters.length!=0?String.fromCharCode(letters.map(letter=>letter.charCodeAt()-97).reduce((acc,n)=>acc+=n+1)%26+97):'z'
}
const tests = [
    [["a", "b", "c"], "f"],
    [["z"], "z"],
    [["a", "b"], "c"],
    [["c"], "c"],
    [["z", "a"], "a"],
    [["y", "c", "b"], "d"],
    // [[], "z"],
];
tests.forEach((test) => {
    console.log(addLetters(test[0]));
    console.log("Result should be - ", test[1]);
});
