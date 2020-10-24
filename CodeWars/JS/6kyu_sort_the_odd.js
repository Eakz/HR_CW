// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

const sortArray = a => {
    // Creating new list to collect odds
    let odds = [];
    // Extracting all odds from the list and leaving null as a placeholder
    a = a.map(e => {
        if (e % 2 === 1) {
            odds.push(e);
            return null;
        }
        return e;
    });
    // Sorting extracted odds
    odds.sort((a, b) => a - b);
    // Returning unpacked(converting to array) map object
    // where we substituted every null for first element of the sorted odds array(sequantialy )
    return [...a.map(e => (e === null ? odds.shift() : e))];
};

// Same solution, but without placeholders
const sortArray = a => {
    const odds = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => (x % 2 ? odds.shift() : x));
};
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
