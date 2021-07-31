// https://www.codewars.com/kata/5726f813c8dcebf5ed000a6b/train/javascript
function pfc(n) {
    let j = 0;
    for (let i = 2; i <= n / i; i++) {
        while (n % i == 0) {
            j++;
            n /= i;
        }
    }
    if (n > 1) j++;
    return j;
}

function countKprimes(k, start, nd) {
    let ys = [];
    for (let n = start; n <= nd; n++) {
        let j = pfc(n);
        if (j == k) {
            ys.push(n);
        }
    }
    return ys;
}

function puzzle(s) {
    let j = 0;
    for (let a of countKprimes(1, 2, s - 2)) {
        for (let b of countKprimes(3, 4, s - a)) {
            let c = s - a - b;
            if (c > 0 && pfc(c) == 7) {
                j++;
            }
        }
    }
    return j;
}


console.log(countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51,
    55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
// console.log(countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76,
//         78, 92, 98, 99]);
// console.log(countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
// console.log(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);
