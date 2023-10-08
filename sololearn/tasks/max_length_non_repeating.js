function longestUnique(s) {
  let set = new Set(), l = 0, max = 0;
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) set.delete(s[l++]);
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}
