const cubeSum = (n, m) =>
    n === m
        ? 0
        : [...Array(m > n ? m + 1 : n + 1).keys()]
              .slice(m > n ? n + 1 : m + 1)
              .reduce((acc, e) => acc + e ** 3, 0);

console.log(cubeSum(5, 0), 225, "cubeSum(5,0)");
console.log(cubeSum(2, 3), 27, "cubeSum(2,3)");
