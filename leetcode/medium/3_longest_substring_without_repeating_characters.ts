// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let start = 0;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            start = Math.max(start, map.get(char) + 1);
        }
        map.set(char, i);
        max = Math.max(max, i - start + 1);
    }
    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'), 3); // 3
console.log(lengthOfLongestSubstring('bbbbb'), 1); // 1
console.log(lengthOfLongestSubstring('pwwkew'), 3); // 3
