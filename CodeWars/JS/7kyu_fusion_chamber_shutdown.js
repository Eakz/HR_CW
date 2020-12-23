// https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9/train/javascript

function burner(c, h, o) {
    let water = 0,
        co2 = 0,
        methane = 0;
    const co2c = (c, h, o) => c >= 1 && o >= 2;
    const h2oc = (c, h, o) => h >= 2 && o >= 1;
    const ch4c = (c, h, o) => c >= 1 && h >= 4;
    while (co2c(c, h, o) || h2oc(c, h, o) || ch4c(c, h, o)) {
        if (h2oc(c, h, o)) {
            h -= 2;
            o--;
            water++;
        } else if (co2c(c, h, o)) {
            c--;
            o -= 2;
            co2++;
        } else if (ch4c(c, h, o)) {
            c--;
            h -= 4;
            methane++;
        }
    }
    return [water, co2, methane];
}

// Mathematical solution
function burner(c, h, o) {
    const water = Math.min(~~(h / 2), o);
    const carbon = Math.min(~~((o - water) / 2), c);
    const methane = Math.min(~~((h - water * 2) / 4), c - carbon);
    return [water, carbon, methane];
}
console.log(burner(45, 11, 100), [5, 45, 0]);
console.log(burner(354, 1023230, 0), [0, 0, 354]);
console.log(burner(939, 3, 694), [1, 346, 0]);
console.log(burner(215, 41, 82100), [20, 215, 0]);
console.log(burner(113, 0, 52), [0, 26, 0]);
