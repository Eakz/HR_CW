// https://www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

function maxSumBetweenTwoNegatives(a) {
    return a.reduce( ([z,runningSum],v) => v<0 ? [ Math.max(z,runningSum), 0 ] : [z,runningSum+v] , [-1,-Infinity] )[0];
  }



  console.log( maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]), 8 );
  console.log( maxSumBetweenTwoNegatives([5,-1,-2]), 0 );
  console.log( maxSumBetweenTwoNegatives([1,-2]), -1 );
