// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

const longest = (str) => {
    let maxLength = 0,
        result,
        start = 0,
        end,
        prev;
    for (let i = 1; i < str.length; i++) {
        end = i;
        prev = str.charCodeAt(i) - str.charCodeAt(i - 1);
        if (prev < 0) {
            if (maxLength < str.slice(start, end).length) {
                result = str.slice(start, end);
                maxLength = result.length;
            }

            start = i;
        } else if (
            end === str.length - 1 &&
            maxLength < str.slice(start).length
        ) {
            result = str.slice(start);
        }
    }
    return result ? result : str;
};

console.log(longest("asd"), " === ", "as");
console.log(longest("nab"), " === ", "ab");
console.log(longest("abcdeapbcdef"), " === ", "abcde");
console.log(longest("asdfaaaabbbbcttavvfffffdf"), " === ", "aaaabbbbctt");
console.log(longest("asdfbyfgiklag"), " === ", "fgikl");
console.log(longest("z"), " === ", "z");
console.log(longest("zyba"), " === ", "z");
