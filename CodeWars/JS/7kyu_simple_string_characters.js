// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s) {
    const variants = [/[A-Z]/, /[a-z]/, /[0-9]/, /\S/];
    const result = [0, 0, 0, 0];
    [...s].forEach((a) => {
        for (let i = 0; i < variants.length; i++) {
            if (variants[i].test(a)) {
                result[i]++;
                break;
            }
        }
    });
    return result;
}
const solve = (str) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
  );
console.log(solve("Codewars@codewars123.com")); //[1,18,3,2]);
// console.log(solve("bgA5<1d-tOwUZTS8yQ")); //[7,6,3,2]);
// console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")); //[9,9,6,9]);
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")); //[15,8,6,9]);
// console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")); // [10,7,3,6])
// console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); // [7,13,4,10]);
