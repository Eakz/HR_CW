// https://www.codewars.com/kata/5bb904724c47249b10000131/train

function points(games) {
    var result = 0;
    for (let i of games) {
        if (i[0] > i[2]) {
            result += 3;
        } else if (i[0] < i[2]) {
            result -= 0;
        } else {
            result += 1;
        }
    }
    if (result > 0) {
        return result;
    } else {
        return 0;
    }
}

const points = (games) =>
    games.reduce((output, current) => {
        return (output +=
            current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
    }, 0);

// describe("Basic tests", function(){
console.log(
    points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
    ])
); // ==> 30
console.log(
    points([
        "1:1",
        "2:2",
        "3:3",
        "4:4",
        "2:2",
        "3:3",
        "4:4",
        "3:3",
        "4:4",
        "4:4",
    ])
); // ==> 10
console.log(
    points([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
    ])
); // ==> 0
console.log(
    points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
    ])
); // ==> 15
console.log(
    points([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
    ])
); // ==> 12
