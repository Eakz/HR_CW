// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        if (!prefix) return prefix;
        const word = strs[i].slice(0, prefix.length);
        if (word.length < prefix.length) {
            prefix = prefix.slice(0, word.length);
        }
        for (let _ = 0; _ < word.length; _++) {
            const wordSlice = word.slice(0, prefix.length);
            if (prefix !== wordSlice) {
                prefix = prefix.slice(0, -1);
            }
        }
    }
    
    return prefix;
}

// Tests
console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
console.log(longestCommonPrefix(['reflower', 'flow', 'flight']), '');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']), '');
