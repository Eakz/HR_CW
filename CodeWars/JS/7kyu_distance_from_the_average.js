// https://www.codewars.com/kata/568ff914fc7a40a18500005c/train/javascript

function distancesFromAverage(arr){
    const avg = arr.reduce((acc,e)=>acc+e,0)/arr.length;
    return arr.map(e=>Math.round((avg-e)*100)/100)
  }

  if (require.main.path.includes('mocha')) {
 const Test = require('chai');
    describe("Basic tests", () =>{
        Test.assertSimilar(distancesFromAverage([55, 95, 62, 36, 48]), [4.2, -35.8, -2.8, 23.2, 11.2])
        Test.assertSimilar(distancesFromAverage([1, 1, 1, 1, 1]), [0, 0, 0, 0, 0])
        Test.assertSimilar(distancesFromAverage([1, -1, 1, -1, 1, -1]), [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0])
        Test.assertSimilar(distancesFromAverage([1, -1, 1, -1, 1]), [-0.8, 1.2, -0.8, 1.2, -0.8])
        Test.assertSimilar(distancesFromAverage([2, -2]), [-2.0, 2.0])
        Test.assertSimilar(distancesFromAverage([1]), [0])
        Test.assertSimilar(distancesFromAverage([123, -65, 32432, -353, -534]), [6197.6, 6385.6, -26111.4, 6673.6, 6854.6])
        Test.assertSimilar(distancesFromAverage(Array(102).join("a").split("").map((a,b)=>b)), Array(102).join("a").split("").map((a,b)=>50-b))
        Test.assertSimilar(distancesFromAverage(Array(1002).join("a").split("").map((a,b)=>b)).join(",") == Array(1002).join("a").split("").map((a,b)=>500-b).join(","), true) //not to flood the console...
        Test.assertSimilar(distancesFromAverage(Array(100002).join("a").split("").map((a,b)=>b)).join(",") == Array(100002).join("a").split("").map((a,b)=>50000-b).join(","), true)
        })
  }else{
    console.log(distancesFromAverage([55, 95, 62, 36, 48]), [4.2, -35.8, -2.8, 23.2, 11.2])
    console.log(distancesFromAverage([1, 1, 1, 1, 1]), [0, 0, 0, 0, 0])
    console.log(distancesFromAverage([1, -1, 1, -1, 1, -1]), [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0])
    console.log(distancesFromAverage([1, -1, 1, -1, 1]), [-0.8, 1.2, -0.8, 1.2, -0.8])
    console.log(distancesFromAverage([2, -2]), [-2.0, 2.0])
    console.log(distancesFromAverage([1]), [0])
  }