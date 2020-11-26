// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript

const nextHappyYear = n =>
    /^(?:([0-9])(?!.*\1))*$/.test((n + 1).toString()) ? n + 1 : nextHappyYear(n + 1);
console.log(nextHappyYear(1001), 1023);
console.log(nextHappyYear(1123), 1203);
console.log(nextHappyYear(2001), 2013);
console.log(nextHappyYear(2334), 2340);
console.log(nextHappyYear(3331), 3401);
console.log(nextHappyYear(1987), 2013);
console.log(nextHappyYear(5555), 5601);
console.log(nextHappyYear(7712), 7801);
console.log(nextHappyYear(8088), 8091);
console.log(nextHappyYear(8999), 9012);
