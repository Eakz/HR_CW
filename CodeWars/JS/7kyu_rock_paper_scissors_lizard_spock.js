// https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript

function rpsls(pl1, pl2) {
    const results = {
        scissors: ['paper', 'lizard'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
    };
    return results[pl1].includes(pl2)
        ? 'Player 1 Won!'
        : results[pl2].includes(pl1)
        ? 'Player 2 Won!'
        : 'Draw!';
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('rock paper scissors lizard spock', function () {
        it('Player 1 Won!', function () {
            Test.equal(rpsls('rock', 'lizard'), 'Player 1 Won!');
            Test.equal(rpsls('paper', 'rock'), 'Player 1 Won!');
            Test.equal(rpsls('scissors', 'lizard'), 'Player 1 Won!');
            Test.equal(rpsls('lizard', 'paper'), 'Player 1 Won!');
            Test.equal(rpsls('spock', 'rock'), 'Player 1 Won!');
        });

        it('player 2 win', function () {
            Test.equal(rpsls('lizard', 'scissors'), 'Player 2 Won!');
            Test.equal(rpsls('spock', 'lizard'), 'Player 2 Won!');
            Test.equal(rpsls('paper', 'lizard'), 'Player 2 Won!');
            Test.equal(rpsls('scissors', 'spock'), 'Player 2 Won!');
            Test.equal(rpsls('rock', 'spock'), 'Player 2 Won!');
        });

        it('draw', function () {
            Test.equal(rpsls('rock', 'rock'), 'Draw!');
            Test.equal(rpsls('spock', 'spock'), 'Draw!');
        });
    });
} else {
    console.log(rpsls('rock', 'lizard'), 'Player 1 Won!');
    console.log(rpsls('paper', 'rock'), 'Player 1 Won!');
    console.log(rpsls('scissors', 'lizard'), 'Player 1 Won!');
    console.log(rpsls('lizard', 'paper'), 'Player 1 Won!');
    console.log(rpsls('spock', 'rock'), 'Player 1 Won!');
    console.log(rpsls('rock', 'rock'), 'Draw!');
    console.log(rpsls('spock', 'spock'), 'Draw!');
}
