function isTriangleNumber(number) {
    sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
        if (sum === number) {
            return true;
        }
    }
    return sum === number ? true : false;
}

// elegant math solution
var isTriangleNumber = n => Number.isInteger(Math.sqrt(1 + 8 * n));

console.log(isTriangleNumber(10));
