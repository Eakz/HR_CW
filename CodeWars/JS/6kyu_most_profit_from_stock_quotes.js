// https://www.codewars.com/kata/597ef546ee48603f7a000057/train/javascript
function getMostProfitFromStockQuotes(quotes) {
    let top = -Infinity;
    return quotes.reduceRight((p, v) => {
        if (top < v) top = v;
        return p + top - v;
    }, 0);
}

[
    {
        quotes: [1, 2, 3, 4, 5, 6],
        expected: 15,
    },
    {
        quotes: [6, 5, 4, 3, 2, 1],
        expected: 0,
    },
    {
        quotes: [1, 6, 5, 10, 8, 7],
        expected: 18,
    },
].forEach(data => {
    var actual = getMostProfitFromStockQuotes(data.quotes);
    console.log(actual, data.expected, `Most profit for [${data.quotes}] quotes`);
});
