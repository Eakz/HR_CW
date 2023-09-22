function isAnagram(a, b) {
    if (a.length !== b.length) return false;
    const count = {};
    for (const c of a) count[c] = (count[c] || 0) + 1;
    for (const c of b) {
        if (!count[c]) return false;
        count[c]--;
    }
    return true;
}
