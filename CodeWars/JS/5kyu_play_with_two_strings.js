// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/
var change = x =>x==x.toLowerCase()?x.toUpperCase():x,
    get = (a,b) => ([...a].map(i=>b = b.replace(new RegExp(`${i}`,'gi'),change)), b)
function workOnStrings(a,b){
      b = get(a,b)
      return get(b,a)+b
}


console.log(workOnStrings("abc", "cde")); // "abCCde");
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe")); // "abcDeFGtrzWDEFGgGFhjkWqE");
console.log(workOnStrings("abcdeFg", "defgG")); // "abcDEfgDEFGg");
console.log(workOnStrings("abab", "bababa")); // "ABABbababa");
