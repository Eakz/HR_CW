// https://www.codewars.com/kata/55143152820d22cdf00001bb/train/javascript

// return the number of 9's used to count out 1 to n
// function number9(n) {
//     count = 0;
//     for (let i = 1; i <= n; i++) {
//         for (j of i.toString()) {
//             if (j === "9") {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
function number9(n){
    if (n==0) return 0;
    var c=0,l=(n+'').length,f=+(n+'')[0];
    if (l>1) c+=f*Math.pow(10,l-2)*(l-1);
    if (f>9) c+=Math.pow(10,l-1); else if (f==9) c+=n-f*Math.pow(10,l-1)+1;
    return number9(+(n+'').slice(1))+c
}    

console.log(number9(1)); // 0, 'Nein!')
console.log(number9(9)); // 1, 'Nein!')
console.log(number9(100)); // 20, 'Nein!')
console.log(number9(565754)); //275645, 'Nein!')
console.log(number9(10000000000)); //10000000000, 'Nein!')
