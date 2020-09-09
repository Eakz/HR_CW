const maxMin = (k, arr) => {
    k--;
    arr = arr.sort((a, b) => a - b);
    return Math.min(arr.map((e, i) => arr[i + k] - e));
};
