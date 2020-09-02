// https://www.hackerrank.com/challenges/maximum-xor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous

// Fast type - slow speed
const maxXor = (arr, queries) =>
    queries.map(e => Math.max(...arr.map(a => e ^ a)));
// Long type - fast speed
function maxXor(arr, queries) {
    let arrN = arr.length,
        queriesN = queries.length,
        cache = {},
        results = [],
        switches = { 0: 1, 1: 0 },
        bitNumber = 32,
        neededBits = bitNumber;
    for (let o = 0; o < arrN; o += 1) {
        let currentNumber = arr[o],
            bin = currentNumber.toString(2).padStart(bitNumber, 0),
            currentNode = cache;
        for (let i = 0; i < bitNumber; i += 1) {
            let currentBit = bin[i];
            if (!currentNode[currentBit]) {
                currentNode[currentBit] =
                    i === bitNumber - 1 ? currentNumber : {};
            }
            currentNode = currentNode[currentBit];
        }
    }

    while (!cache[1] || typeof cache === "number") {
        cache = cache[0];
        neededBits -= 1;
    }

    for (let i = 0; i < queriesN; i += 1) {
        let currentNode = cache,
            currentNumber = queries[i],
            bin = currentNumber.toString(2).padStart(bitNumber, 0),
            u = bitNumber - neededBits;
        while (typeof currentNode !== "number") {
            let current = bin[u],
                w = switches[current];
            currentNode =
                typeof currentNode[w] === "undefined"
                    ? currentNode[current]
                    : currentNode[w];
            u += 1;
        }
        results.push(currentNode ^ currentNumber);
    }
    return results;
}
console.log(maxXor([0, 1, 2], [3, 7, 2]), " === ", [3, 7, 3]);
