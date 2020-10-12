// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

const solve = s =>
    s.split(/[bcdfghjklmnpqrstvwxyz]/).sort((a, b) => b.length - a.length)[0]
        .length;

console.log(solve("codewarriors"), 2);
console.log(solve("suoidea"), 3);
console.log(solve("ultrarevolutionariees"), 3);
console.log(solve("strengthlessnesses"), 1);
console.log(solve("cuboideonavicuare"), 2);
console.log(solve("chrononhotonthuooaos"), 5);
console.log(solve("iiihoovaeaaaoougjyaw"), 8);
