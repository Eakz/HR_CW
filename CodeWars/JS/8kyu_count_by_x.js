// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

countBy=(x,n)=>[...Object.keys(Array(n+1).fill(''))].slice(1).map(e=>e*x)


console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Array does not match")
console.log(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match")

