// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

function solve(a,b){
    return [...a].filter(l=>!b.includes(l)).concat([...b].filter(l=>!a.includes(l))).join('')
   };

console.log(solve("xyab","xzca")) //"ybzc");
console.log(solve("xyabb","xzca")) //"ybbzc");
console.log(solve("abcd","xyz")) //"abcdxyz");
console.log(solve("xxx","xzca")) //"zca");
