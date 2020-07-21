// https://www.codewars.com/kata/5eea52f43ed68e00016701f3

function countWays(n, k){
    const jumps = [...Array(k).keys];
    return jumps;
}


console.log(countWays(1, 3)) // 1);
console.log(countWays(3, 3)) // 4);
console.log(countWays(2, 3)) // 2);
console.log(countWays(5, 3)) // 13);
console.log(countWays(4, 3)) // 7);
console.log(countWays(10, 6)) // 492);
console.log(countWays(14, 7)) // 7936);
