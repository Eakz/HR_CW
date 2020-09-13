// https://www.hackerrank.com/challenges/apple-and-orange/problem
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    oranges = oranges.map(e => e + b).filter(e => e >= s && e <= t).length;
    apples = apples.map(e => e + a).filter(e => e >= s && e <= t).length;
    console.log(apples);
    console.log(oranges);
}
