// https://www.codewars.com/kata/52a6b34e43c2484ac10000cd

function getNiceNames(people) {
    return people.filter((a) => a.wasNice).map((a) => a.name);
}

function getNaughtyNames(people) {
    return people.filter((a) => !a.wasNice).map((a) => a.name);
}

function justNames(array) {
    return array.map(function (e) {
        return e.name;
    });
}

var naughty = [{ name: "xDranik", wasNice: false }];
var nice = [
    { name: "Santa", wasNice: true },
    { name: "Warrior reading this kata", wasNice: true },
];

console.log(getNiceNames(naughty)); // []);
console.log(getNaughtyNames(nice)); // []);
console.log(getNiceNames(nice.concat(naughty))); // justNames(nice));
console.log(getNaughtyNames(nice.concat(naughty))); // justNames(naughty));
