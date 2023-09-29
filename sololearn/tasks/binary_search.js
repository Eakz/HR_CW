function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) return m;
    arr[m] < target ? l = m + 1 : r = m - 1;
  }
  return -1;
}
