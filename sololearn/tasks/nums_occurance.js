function topK(nums, k) {
  const freq = {};
  nums.forEach(n => freq[n] = (freq[n] || 0) + 1);
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(x => +x[0]);
}
