// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pD, sD, uS, sS, d) {
    let u = pD / uS;
    let s = sD / (d ? sS / 2 : sS);
    return u < s ? "Alive!" : "Shark Bait!";
}

console.log(shark(12, 50, 4, 8, true), "Alive!");
console.log(shark(7, 55, 4, 16, true), "Alive!");
console.log(shark(24, 0, 4, 8, true), "Shark Bait!");
