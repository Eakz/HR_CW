// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    let aPrice = bill.reduce((a, b) => a + b) / 2;
    console.log(aPrice === b ? "Bon Appetit" : b - aPrice);
}
