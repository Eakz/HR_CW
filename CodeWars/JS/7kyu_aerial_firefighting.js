// https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af/train/javascript

function waterbombs(fire, w) {
    return fire.split('Y').reduce((a, b) => a + Math.ceil(b.length / w), 0);
}

console.log(waterbombs('xxxxYxYx', 4), 3);
console.log(waterbombs('xxYxx', 3), 2);
console.log(waterbombs('Y', 4), 0);
console.log(waterbombs('xx', 1), 2);
console.log(waterbombs('xxYxx', 3), 2);
console.log(waterbombs('xxxYx', 1), 4);
console.log(waterbombs('xxxxYxYx', 4), 3);
console.log(waterbombs('xxxxxYxYx', 2), 5);
