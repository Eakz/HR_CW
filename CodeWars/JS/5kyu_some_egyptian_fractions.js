// https://www.codewars.com/kata/54f8693ea58bce689100065f/train/javascript

function decompose(n) {
    let [a, b] = isNaN(n) ? n.split("/").map(Number) : [Number(n), 1],
        res = [];
    while (a % 1) [a, b] = [a * 10 * 1, b * 10 * 1];
    if (b < a) {
        res.push(String((a / b) >> 0));
        a %= b;
    }
    while (0 < a) {
        let dv = Math.ceil(b / a);
        res.push("1/" + dv);
        [a, b] = [a * dv - b, b * dv];
    }
    return res;
}

console.log(decompose("3/4"), ["1/2", "1/4"]);
// console.log(decompose("12/4"), ["3"]);
// console.log(decompose("0.66"), ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
// console.log(decompose("0/1000"), []);
