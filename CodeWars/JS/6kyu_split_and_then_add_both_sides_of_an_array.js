// https://www.codewars.com/kata/5946a0a64a2c5b596500019a

function splitAndAdd(arr, n) {
    if (n === 0) {
        return arr;
    }
    for (_ = 0; _ < n; _++) {
        let half = arr.length / 2;
        let left = arr.slice(0, half);
        let right = arr.slice(half);
        // console.log(left, right);
        var result = [];
        for (i = left.length - 1; i >= 0; i--) {
            if (left.length != right.length) {
                result.push(left[i] + right[i + 1]);
            } else {
                result.push(left[i] + right[i]);
            }
        }
        result.reverse();
        if (left.length != right.length) {
            result.unshift(right[0]);
        }
        arr = result;
    }
    return result;
}

// recursive version

function splitAndAdd(arr, n) {
    if (n <= 0) return arr;

    const ln = arr.length;
    if (ln % 2 === 1) arr.unshift(0);

    return splitAndAdd(
        arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]),
        n - 1,
    );
}
console.log(splitAndAdd([1, 2, 3, 4, 5], 2)); // [5,10])
console.log(splitAndAdd([1, 2, 3, 4, 5], 3)); // [15])
console.log(splitAndAdd([15], 3)); // [15])
console.log(splitAndAdd([32, 45, 43, 23, 54, 23, 54, 34], 2)); // [183, 125])
console.log(splitAndAdd([32, 45, 43, 23, 54, 23, 54, 34], 0)); // [32,45,43,23,54,23,54,34])
console.log(splitAndAdd([3, 234, 25, 345, 45, 34, 234, 235, 345], 3)); // [305, 1195])
console.log(
    splitAndAdd(
        [
            3,
            234,
            25,
            345,
            45,
            34,
            234,
            235,
            345,
            34,
            534,
            45,
            645,
            645,
            645,
            4656,
            45,
            3,
        ],
        4,
    ),
); // [1040, 7712])
console.log(
    splitAndAdd(
        [23, 345, 345, 345, 34536, 567, 568, 6, 34536, 54, 7546, 456],
        20,
    ),
); // [79327])
