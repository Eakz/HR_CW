// https://www.codewars.com/kata/581bb3c1c221fb8e790001ef/train/javascript

const selectSubarray = a => {
    const totalSum = a.reduce((acc, e) => acc + e);
    const totalProd = a.reduce((acc, e) => acc * e);
    let result = [];
    a.slice().forEach((e, i) =>
        result.push([i, Math.abs(totalProd / e / (totalSum - e))]),
    );
    result = result
        .sort((a, b) => a[1] - b[1])
        .filter(e => e[1] === result[0][1])
        .map(e => [e[0], a[e[0]]]);
    return result.length > 1 ? result : result[0];
};

console.log(selectSubarray([1, 23, 2, -8, 5]), [3, -8]);
console.log(selectSubarray([1, 3, 23, 4, 2, -8, 5, 18]), [2, 23]);
