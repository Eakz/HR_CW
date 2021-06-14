// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
let animal=(a)=>15+(!!(humanYears-1)&&9)+(((humanYears-2)<=0)?0:(humanYears-2)*(a==="c"?4:5))
return [humanYears,animal('c'),animal('d')]
  }
  

    console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
    console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
    console.log(humanYearsCatYearsDogYears(10), [10,56,64]);

  