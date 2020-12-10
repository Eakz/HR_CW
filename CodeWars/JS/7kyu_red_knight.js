// https://www.codewars.com/kata/5fc4349ddb878a0017838d0f/train/javascript

function redKnight(N, P) {
    let pos = 0;
    let colors = ["White", "Black"];
    N = Boolean(N);
    while (pos < P) {
        N = !N;
        pos += 2;
        P++;
    }
    return [colors[Number(N)], pos];
}

console.log(redKnight(0, 8), ["White", 16]);
console.log(redKnight(0, 7), ["Black", 14]);
console.log(redKnight(1, 6), ["Black", 12]);
console.log(redKnight(1, 5), ["White", 10]);
