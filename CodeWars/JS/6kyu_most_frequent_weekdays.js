// https://www.codewars.com/kata/56eb16655250549e4b0013f4/train/javascript

function mostFrequentDays(year) {
    const stats = {};
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let date = new Date(Date.parse((year = year)));
    while (date.getFullYear() === year) {
        if (stats[date.getDay()]) {
            stats[date.getDay()]++;
        } else {
            stats[date.getDay()] = 1;
        }
        date = new Date(date.getTime() + 60 * 60 * 1000 * 24);
    }
    const max = Object.values(stats).sort().slice(-1)[0];
    let keys = Object.keys(stats).slice(1).concat(["0"]);
    return keys.map((a) => (stats[a] === max ? days[a] : 0)).filter((a) => a);
}
console.log(mostFrequentDays(1770)); // ['Monday'], "Should be: ['Monday']");
console.log(mostFrequentDays(1785)); // ['Saturday'], "Should be: ['Saturday']");
console.log(mostFrequentDays(1794)); // ['Wednesday'], "Should be: ['Wednesday']");
console.log(mostFrequentDays(1901)); // , ['Tuesday'], "Should be: ['Tuesday']");
console.log(mostFrequentDays(1910)); // ['Saturday'], "Should be: ['Saturday']");
console.log(mostFrequentDays(1968)); // ['Monday', 'Tuesday'], "Should be: ['Monday', 'Tuesday']");
console.log(mostFrequentDays(1984)); // ['Monday', 'Sunday'], "Should be: ['Monday', 'Sunday']");
console.log(mostFrequentDays(1986)); // ['Wednesday'], "Should be: ['Wednesday']");
console.log(mostFrequentDays(2001)); // ['Monday'], "Should be: ['Monday']");
console.log(mostFrequentDays(2016)); // ['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
console.log(mostFrequentDays(2135)); // ['Saturday'], "Should be: ['Saturday']");
console.log(mostFrequentDays(3043)); // ['Sunday'], "Should be: ['Sunday']");
console.log(mostFrequentDays(3150)); // ['Sunday'], "Should be: ['Sunday']");
console.log(mostFrequentDays(3230)); // ['Tuesday'], "Should be: ['Tuesday']");
console.log(mostFrequentDays(3361)); // ['Thursday'], "Should be: ['Thursday']");
console.log(mostFrequentDays(2000)); // ['Saturday', 'Sunday'], "Should be: ['Saturday', 'Sunday']");
console.log(mostFrequentDays(1984)); // ['Monday', 'Sunday'], "Should be: ['Monday', 'Sunday']");
// console.log(mostFrequentDays(2001));
// console.log(mostFrequentDays(2002));
// console.log(mostFrequentDays(2003));
// console.log(mostFrequentDays(2004));
// console.log(mostFrequentDays(2005));
