// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function alternatingCharacters(s) {
    let dels = 0;
    s.split("").forEach((e, i) => {
        if (i < s.length - 1 && e === s[i + 1]) {
            dels++;
        }
    });
    return dels;
}
