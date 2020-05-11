// https://www.codewars.com/kata/57a6633153ba33189e000074

    var orderedCount = (text)=> {
        let result = [];
        new Set(text).forEach(a=>result.push([a,text.split('').filter(b=>b===a).length]));
        return result;
    };

console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
// console.log(orderedCount("Code Wars")); //  [['C', 1], ['o', 1], ['  d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
// console.log(orderedCount("212")); // [['2',  2], ['1', 1 ]]],
