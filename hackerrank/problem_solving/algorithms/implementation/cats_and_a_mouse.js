// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
function catAndMouse(x, y, z) {
    let A = Math.abs(x - z);
    let B = Math.abs(y - z);
    return A > B ? "Cat B" : A === B ? "Mouse C" : "Cat A";
}
