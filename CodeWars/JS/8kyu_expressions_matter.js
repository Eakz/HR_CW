function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);
}
console.log("block 1");
console.assert(expressionMatter(2, 1, 2)===6);
console.assert(expressionMatter(2, 1, 1)===4);
console.assert(expressionMatter(1, 1, 1)===3);
console.assert(expressionMatter(1, 2, 3)===9);
console.assert(expressionMatter(1, 3, 1)===5);
console.assert(expressionMatter(2, 2, 2)===8);
console.log("block 2");
console.assert(expressionMatter(5, 1, 3)===20);
console.assert(expressionMatter(3, 5, 7)===105);
console.assert(expressionMatter(5, 6, 1)===35);
console.assert(expressionMatter(1, 6, 1)===8);
console.assert(expressionMatter(2, 6, 1)===14);
console.assert(expressionMatter(6, 7, 1)===48);
console.log("block 3");
console.assert(expressionMatter(2, 10, 3)=== 60);
console.assert(expressionMatter(1, 8, 3)=== 27);
console.assert(expressionMatter(9, 7, 2)=== 126);
console.assert(expressionMatter(1, 1, 10)=== 20);
console.assert(expressionMatter(9, 1, 1)=== 18);
console.assert(expressionMatter(10, 5, 6)=== 300);
console.assert(expressionMatter(1, 10, 1)=== 12);
