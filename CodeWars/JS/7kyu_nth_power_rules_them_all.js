function modifiedSum(a, n) {
    return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
  }


console.log(modifiedSum([1, 2, 3], 3)) //  30); 
console.log(modifiedSum([1, 2], 5)) //  30);
