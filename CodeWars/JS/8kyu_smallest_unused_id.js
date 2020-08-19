// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

const nextId = ids => {
    const big = Math.max(...ids);
    for (let i = 0; i < big; i++) {
        if (!ids.includes(i)) {
            return i;
        }
    }
    return big + 1;
};

console.log(nextId([0, 1, 2, 3, 5]), 4);

console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
