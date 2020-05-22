// https://www.codewars.com/kata/593c9175933500f33400003e

function multiples(m, n) {
    const result=[];
    for(let i =1;i<m+1;i++){result.push(i*n)};
    return result;
}

console.log(multiples(3, 5)); // [5, 10, 15])
