// https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen

function getMinimumCost(k, c) {
    // Default case when all people can buy 1 flower each
    if (c.length === k) {
        return c.reduce((acc, e) => acc + e);
    }
    // Sorting list to get highest value in the pop() zone
    let sortedPrice = c.sort((a, b) => a - b);
    let multiplier = 0;
    let sum = 0;
    // Popping last with modifier while there are flowers in the list starting
    //  from most expensive and least amount of modifiers
    while (sortedPrice.length > 0) {
        for (let _ = 0; _ < k; _++) {
            if (sortedPrice.length > 0) {
                sum += (multiplier + 1) * sortedPrice.pop();
            }
        }
        multiplier++;
    }
    return sum;
}

console.log(getMinimumCost(3, [1, 3, 5, 7, 9]), " === ", 29);
console.log(getMinimumCost(3, [2, 5, 6]), " === ", 13);
console.log(getMinimumCost(2, [2, 5, 6]), " === ", 15);
