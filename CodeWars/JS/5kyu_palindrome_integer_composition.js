// https://www.codewars.com/kata/599b1a4a3c5292b4cc0000d5/train/javascript

// function values(high) {
//     var result=0;
//     for (let i=2;i<Math.floor(high);i++){
//         if(isPalindrome(i)){
//             let sum=0;
//             let start = 1;
//             let end = i;
//             let consecutive=false;
//             let found=false;
//             let check=[];
//             while(start!==end&&!found){
//                 for(let j=start;j<end;j++){
//                     sum+=j**2
//                     check.push(`Sum is ${sum}, j is ${j}`)
//                     if(sum===i&&consecutive){
//                         // console.log(i)
//                         // console.log(check);
//                         result++;
//                         found=true;
//                         break;
//                     }
//                     consecutive=true;
//                     if(sum>=i){
//                         start++;
//                         consecutive=false;
//                         sum=0;
//                         check=[];
//                         break;
//                     }
//                 }
//             }

//             }
//         }
//         return result-1;
//     }
// const isPalindrome = (number) =>
//     number.toString() === number.toString().split('').reverse().join("");

// const getPalindromeList = (n) => [...Array(n + 1).keys()].slice(2);
// const sumOfSquares = (n) => (n * (n + 1) * (2 * n + 1)) / 6;
// const sumOfSquaresBetween = (n, c) => sumOfSquares(c) - sumOfSquares(n - 1);
// const isSumOfSquaresOfConsecutiveNumbers = (palindrome) => {
//     end = Math.floor(palindrome ** 0.5) + 1;
//     for (let i = 1; i < end; i++) {
//         start = i + 1;
//         finish = Math.floor((end + start) / 2);
//         while (finish != start && finish != end) {
//             list = [...Array(finish).keys()].slice(i);
//             // console.log(
//             //     `pali: ${palindrome}\nlimit:${end}\nlen:${list.length}\nseq:${list}\n`,
//             // );
//             sum = sumOfSquaresBetween(i, finish);
//             console.log(sum);
//             if (palindrome > sum) {
//                 finish = Math.floor((finish + end) / 2) + 1;
//                 continue;
//             } else if (palindrome === sum) {
//                 console.log("hi");
//                 return true;
//             } else {
//                 finish = Math.floor((start + finish) / 2) + 1;
//                 continue;
//             }
//         }
//     }
// };
// const values = (n) => {
//     pals = getPalindromeList(n);
//     palsSum = pals.filter(isSumOfSquaresOfConsecutiveNumbers);
//     return palsSum.length;
// };

function values(high) {
    let rev = n => {
      let res = 0
      while(n > 0){ 
         res = res * 10 + n % 10; 
         n = (n/10)|0   
       } 
      return res;  
    }
    
    let arr = [], n = 1;
    while (n * n < high) {
        let temp = n + 1, total = n * n + temp * temp;
        while (total < high) {
            if (total == rev(total)) arr.push(total)
            temp++
            total += temp * temp;
        }
        n++;
    }
    return (Array.from(new Set(arr))).length;
}
// console.log(getPalindromeList(100));
console.log(values(100)); //3);
// console.log(values(200)); //4);
// console.log(values(300)); //4);
// console.log(values(400)); //5);
// console.log(values(1000)); //11);
