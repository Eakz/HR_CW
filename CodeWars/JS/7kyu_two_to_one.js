// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python

function longest(s1, s2) {
    return [...new Set([...s1,...s2])].sort().join('')
  }

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
