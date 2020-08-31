// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

const solve = eq => {
    let number = "";
    eq.split("").forEach(e => {
        if (e.match(/[0-9]/)) {
            number += e;
        } else {
            if (number) {
                eq = eq.replace(number, number.split("").reverse().join(""));
                number = "";
            }
        }
    });
    if (number) {
        eq = eq.replace(number, number.split("").reverse().join(""));
        number = "";
    }
    return eq.split("").reverse("").join("");
};
console.log(solve("100*b/y"), "y/b*100");
console.log(solve("a+b-c/d*30"), "30*d/c-b+a");
console.log(solve("a*b/c+50"), "50+c/b*a");
