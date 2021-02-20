// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

const rentalCarCost = d =>d*40-((d>=3&&d<7)?20:d>=7?50:0)

console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);    