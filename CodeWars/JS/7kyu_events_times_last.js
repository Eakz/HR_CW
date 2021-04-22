// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

function evenLast(numbers) {
    if (!numbers.length) return 0;
    return numbers.reduce((acc, e, i) => {
        if (i % 2 === 0) {
            return acc + e;
        }
        return acc;
    }, 0)*numbers[numbers.length-1];
}

console.log(evenLast([2, 3, 4, 5]), 30);
