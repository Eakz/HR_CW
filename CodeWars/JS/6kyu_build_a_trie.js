// https://www.codewars.com/kata/5b65c47cbedf7b69ab00066e/train/javascript

function buildTrie(...words) {
    let result = {};
    const wrapper = str => {
        const saturate = (str, key = "", obj = {}) => {
            if (str.length <= 1) {
                key += str;
                obj[key] = null;
                return obj;
            }
            key += str[0];
            console.log("key", key);
            str = str.slice(1);
            console.log(str);
            obj[key] = saturate(str, key);
            return obj;
        };
    };
    words.forEach(e => {
        result = { ...result, ...wrapper(e) };
    });
    return result;
}

// console.log(buildTrie(), {});
// console.log(buildTrie(""), {});
console.log(buildTrie("trie"), { t: { tr: { tri: { trie: null } } } });
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
