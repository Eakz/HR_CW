// https://www.codewars.com/kata/5b65c47cbedf7b69ab00066e/train/javascript

const buildTrie = (...strs) => {
    let result = {};

    strs.forEach(st => {
        let node = result,
            str = "";

        for (let char of st) {
            str += char;
            node[str] = node[str] || (str === st ? null : {});
            node = node[str];
        }
    });

    return result;
};

// console.log(buildTrie(), {});
// console.log(buildTrie(""), {});
// console.log(buildTrie("tree", "top"));
console.log(buildTrie("A", "pie"));
// console.log(buildTrie("tree"), { t: { tr: { tre: { tree: null } } } });
// console.log(buildTrie("trie", "trie"), { t: { tr: { tri: { trie: null } } } });
// console.log(buildTrie("A", "to", "tea", "ted", "ten", "i", "in", "inn"), {
//     A: null,
//     t: { to: null, te: { tea: null, ted: null, ten: null } },
//     i: { in: { inn: null } },
// });
// console.log(buildTrie("true", "trust"), {
//     t: { tr: { tru: { true: null, trus: { trust: null } } } },
// });
// console.log(saturate("abcdefghi"));
