// https://www.codewars.com/kata/5eb34624fec7d10016de426e/train/javascript

function martingale(bank, outcomes) {
    let stake = 100;
    outcomes.forEach(e => {
        if (e === 0) {
            bank -= stake;
            stake *= 2;
        } else {
            bank += stake;
            stake = 100;
        }
    });
    return bank;
}

let basic_tests = [
    [500, [], 500],
    [1000, [1, 1, 0, 0, 1], 1300],
    [0, [0, 0, 0, 0, 1, 0, 0], -200],
    [5100, [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], 5600],
    [-500, [1, 1, 0, 1, 0, 1, 0], -200],
];

for (let [bank, outcomes, final_bank] of basic_tests) {
    console.log(martingale(bank, outcomes), " === ", final_bank);
}
