// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196/train/javascript

const validWord = (dictionary, word) =>
    new RegExp("^(" + dictionary.join("|") + ")+$").test(word);
const { assert } = require("chai");

const act = ([dictionary, word, expected]) => {
    const input = `dictionary: [${dictionary}], word: ${word}`;
    const actual = validWord(dictionary, word);
    console.log(`${input}, expected: ${expected}`, assert.strictEqual(actual, expected));
};
act([["code", "wars"], "codewars", true]);
act([["wars", "code"], "codewars", true]);
act([["code", "wars"], "codecodewars", true]);
act([["code", "wars"], "codewar", false]);
act([["code", "wars"], "codewarscode", true]);
act([["code", "star", "wars"], "starwars", true]);
act([["Star", "Code", "Wars"], "StarCodeWars", true]);
act([["Star", "Code", "Wars"], "WarsStarCode", true]);
act([["Star", "Code", "Wars"], "CodeStarsWar", false]);
act([[], "codewars", false]);
act([["code", "wars"], "code", true]);
act([["a", "b", "c", "d", "e", "f"], "abcdef", true]);
act([["a", "b", "c", "d", "e", "f"], "abcdefg", false]);
act([["ab", "a", "bc"], "abc", true]);
act([["ab", "bc"], "abc", false]);
