// https://www.codewars.com/kata/588f5a38ec641b411200005b/train/javascript


// This level solution fails to take days/months into account unfortunatelly - will give you false results
// var howManyYears = function (date1, date2) {
//     if(date1.split('/').slice(1)===date2.split('/').slice(1)){
//         return Math.abs(Number(date1.split('/')[0])-Number(date2.split('/')[0]))
//     }
//     const getYears = date => {
//         const [years, month, day] = date.split('/').map(e => Number(e));
//         return years + (month+day/(30.5)) / 12;
//     };
//     return Math.floor(Math.abs(getYears(date1) - getYears(date2)));
// };

var howManyYears = function(date1, date2) {
    const year = s => +s.split('/')[0];
    return Math.abs(year(date1) - year(date2));
  }

console.log(howManyYears('1997/10/10', '2015/10/10'), 18);
console.log(howManyYears('1990/10/10', '2015/10/10'), 25);
console.log(howManyYears('2015/10/10', '1990/10/10'), 25);
console.log(howManyYears('1992/10/24', '2015/10/24'), 23);
console.log(howManyYears('2018/10/10', '2000/10/10'), 18);
