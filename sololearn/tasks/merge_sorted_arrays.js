function merge(a, b) {
  const res = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    res.push(a[i] < b[j] ? a[i++] : b[j++]);
  }
  return res.concat(a.slice(i), b.slice(j));
}
