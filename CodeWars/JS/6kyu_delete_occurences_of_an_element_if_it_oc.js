// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr, x) {
    var occ = {};
    return arr.filter(function (n) {
        occ[n] = (occ[n] || 0) + 1;
        return occ[n] <= x;
    });
}

console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21])
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2])
