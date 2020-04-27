// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/

function abbrevName(name) {
    return name
        .split(" ")
        .map((x) => x[0].toUpperCase())
        .join(".");
}

console.log(abbrevName("Sam Harris")); // "S.H");
console.log(abbrevName("Patrick Feenan")); // "P.F");
console.log(abbrevName("Evan Cole")); // "E.C");
console.log(abbrevName("P Favuzzi")); // "P.F");
console.log(abbrevName("David Mendieta")); // "D.M");
console.log(abbrevName("David Mendieta SanFdsfO"));
