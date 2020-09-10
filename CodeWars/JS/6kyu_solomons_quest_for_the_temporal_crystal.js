// https://www.codewars.com/kata/59d7c910f703c460a2000034/train/javascript

// Inputs are always valid.
// Solomon begins his quest at time dilation level 0, at [x,y] coordinates [0,0].
// Time dilation level at any point will always be 0 or greater.
// Standard Distance is the distance at time dilation level 0.
// For given distance d for each value in the array: d >= 0.
// Do not mutate the input
// 0 = North, 1 = East, 2 = South, 3 = West

const solomonsQuest = ar => {
    // coords starting value
    let coords = [0, 0];
    // time dilation starting value
    let td = 0;
    // sides { side :[position in coords, influence on change of coords]}
    let sides = { 0: [1, 1], 1: [0, 1], 2: [1, -1], 3: [0, -1] };
    for (let c of ar) {
        // modifying time dilation based on new value
        td += c[0];
        // getting side specs (pos/direction)
        let side = sides[c[1]];
        // pick x || y
        let positionOfCoords = side[0];
        // define direction subtract or add to x||y
        let sign = side[1];
        // redefine x||y with updated value
        coords[positionOfCoords] += c[2] * 2 ** td * sign;
    }
    return coords;
};
let map1 = [
    [1, 3, 5],
    [2, 0, 10],
    [-3, 1, 4],
    [4, 2, 4],
    [1, 1, 5],
    [-3, 0, 12],
    [2, 1, 12],
    [-2, 2, 6],
];
let map2 = [
    [4, 0, 8],
    [2, 1, 2],
    [1, 0, 5],
    [-3, 3, 16],
    [2, 2, 2],
    [-1, 1, 7],
    [0, 0, 5],
    [-4, 3, 14],
];
let map3 = [
    [1, 1, 20],
    [1, 2, 30],
    [1, 3, 8],
    [1, 0, 2],
    [1, 1, 6],
    [1, 2, 4],
    [1, 3, 6],
    [-7, 0, 100],
];
let map4 = [
    [2, 2, 100],
    [3, 1, 25],
    [4, 0, 8],
    [-6, 3, 25],
    [-1, 2, 80],
    [8, 0, 12],
    [-10, 3, 220],
    [0, 1, 150],
];

console.log(solomonsQuest(map1), " === ", [346, 40]);
// console.log(solomonsQuest(map2), " === ", [68, 800]);
// console.log(solomonsQuest(map3), " === ", [-600, -244]);
// console.log(solomonsQuest(map4), " === ", [530, 15664]);
