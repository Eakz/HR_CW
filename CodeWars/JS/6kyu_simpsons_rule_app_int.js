// https://www.codewars.com/kata/565abd876ed46506d600000d/train/javascript

function simpson(n) {
    function f(x) { return 1.5 * Math.pow(Math.sin(x), 3); }
    var h = Math.PI / n;
    var s1 = 0;
    for (var i = 1; i <= ~~(n / 2); i++) {
        s1 += f((2 * i - 1) * h);
    }
    var s2 = 0;
    for (var j = 1; j <= ~~(n / 2) - 1; j++) {
        s2 += f(2 * j * h);
    }
    var res = Math.PI / (3 * n) * (f(0) + f(Math.PI) + 4 * s1 + 2 * s2);
    return res;
}


console.log(simpson(290), 1.9999999986);
console.log(simpson(72), 1.9999996367);
console.log(simpson(252), 1.9999999975);
console.log(simpson(40), 1.9999961668);
