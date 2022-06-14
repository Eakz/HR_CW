const BN = require("bignumber.js");

const solve = (arr) => {
  let [a, b] = [BN(0), BN(1)];

  for (let i = 0; i < arr.length; i += 2)
    [a, b] = [
      a.times(arr[i]).minus(b.times(arr[i + 1])),
      b.times(arr[i]).plus(a.times(arr[i + 1])),
    ];

  return [a.abs(), b.abs()];
};