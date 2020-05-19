// https://www.codewars.com/kata/52ab60b122e82a6375000bad/

function sortReindeer(reindeerNames) {
    reindeerNames.sort((a,b)=>a.split(' ')[1].localeCompare(b.split(' ')[1]));
    return reindeerNames;
}
[].sort()
let input = [
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
    "Donder Jonker",
    "Blitzen Claus",
];
let output = [
    "Prancer Chua",
    "Blitzen Claus",
    "Cupid Foroutan",
    "Vixen Hall",
    "Donder Jonker",
    "Comet Karavani",
    "Dancer Moore",
    "Dasher Tonoyan",
];
console.log(sortReindeer(input), output);
