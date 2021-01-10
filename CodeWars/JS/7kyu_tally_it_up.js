// https://www.codewars.com/kata/5630d1747935943168000013/train/javascript

var scoreToTally = function(score){
    var c = ['','a','b','c','d','e']
    let answer = 'e <br>'.repeat(Math.floor(score/5))
    return answer+c[score%5]
}

console.log(scoreToTally(3),'c', "Should return 'c'");
console.log(scoreToTally(10),'e <br>e <br>', "Should return 'e <br>e <br>'");
console.log(scoreToTally(9),'e <br>d', "Should return 'e <br>d'");