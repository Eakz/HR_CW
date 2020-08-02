// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
function countSwaps(a) {
    let sortedThisTurn;
    let sortCount = 0;
    do {
        sortedThisTurn = false;
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                [a[i], a[i + 1]] = [a[i + 1], a[i]];
                sortedThisTurn = true;
                sortCount++;
            }
        }
    } while (sortedThisTurn);
    console.log(`Array is sorted in ${sortCount} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a.slice(-1)}`);
}

// Test cases
// #1
// swap    a
// 0       [6,4,1]
// 1       [4,6,1]
// 2       [4,1,6]
// 3       [1,4,6]
// It took

// swaps to sort the array. Output would be

// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 6
countSwaps([6, 4, 1]);
