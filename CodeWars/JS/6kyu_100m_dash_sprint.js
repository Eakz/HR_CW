// https://www.codewars.com/kata/5ac374eeb42182f11a00002d/train/javascript
function raceTime(h, r, a, v) {
    if (h > 100 ||
        r < 0 ||
        a <= 0 ||
        v <= 0) {
        return "Cannot calculate. Invalid data."
    }

    if (r <= .1) {
        return "False start!"
    }

    let a_t = v / a;
    let a_d = h + .5 * a * a_t * a_t;
    if (a_d > 100) {
        return (r + Math.sqrt(2 * (100 - h) / a)).toFixed(2) + " seconds"
    } else {
        return (r + a_t + (100 - a_d) / v).toFixed(2) + " seconds"
    }
}


console.log(raceTime(0.00, 1.00, 10.00, 10.00), "11.50 seconds");
console.log(raceTime(1.00, 1.00, 10.00, 10.00), "11.40 seconds");
console.log(raceTime(1.00, 1.00, 33.33, 1.00), "100.02 seconds");
console.log(raceTime(1.00, 1.00, 33.33, 33.33), "4.47 seconds");
console.log(raceTime(-100.00, 0.11, 33.33, 33.33), "6.61 seconds");
console.log(raceTime(-100.00, 0.10, 33.33, 33.33), "False start!");
console.log(raceTime(-100.00, 2.11, 0.01, 33.33), "202.11 seconds");
console.log(raceTime(-100.00, 2.11, 0.01, 63.33), "202.11 seconds");
console.log(raceTime(-10.00, 2.11, 33.33, 0.01), "11002.11 seconds");
console.log(raceTime(100.00, 2.11, 33.33, 0.01), "2.11 seconds");
console.log(raceTime(100.01, 2.11, 33.33, 0.01), "Cannot calculate. Invalid data.");
console.log(raceTime(100.00, 0.00, 33.33, 5.55), "False start!");
console.log(raceTime(100.00, 0.00, 0.00, 5.55), "Cannot calculate. Invalid data.");
console.log(raceTime(100.00, 1.0, 5.55, 0.0), "Cannot calculate. Invalid data.");
console.log(raceTime(200.00, 0.13, 5.55, 11.00), "Cannot calculate. Invalid data.");
console.log(raceTime(-5200.00, 0.13, 5.55, 11.00), "482.94 seconds");
console.log(raceTime(-52000.66, 0.19, 5.55, 110.42), "481.98 seconds");
console.log(raceTime(-529556000.66, 0.19, 1.55, 119567460.42), "26140.16 seconds");

