// https://www.codewars.com/kata/5a906c895084d7ed740000c2/train/javascript

function solve(n) {
    let res = 1n;
    for (let i = n + 2n, j = 1n; j < n; i++, j++)
      res = res * i / j;
    return res / n;
  }

  if(require.main.path.includes('mocha')){
    const Test = require('chai')
    const assert = Test.assert
    describe("Simple number triangle", ()=>{
        it("Example tests", ()=>{
          assert.strictEqual( solve(4n), 14n );
          assert.strictEqual( solve(5n), 42n );
          assert.strictEqual( solve(6n), 132n );
          assert.strictEqual( solve(7n), 429n );
          assert.strictEqual( solve(8n), 1430n );
          assert.strictEqual( solve(20n), 6564120420n );
        });
      });
  }else{
    console.log( solve(1n), 1n );
    console.log( solve(2n), 2n );
    console.log( solve(3n), 5n );
    console.log( solve(4n), 14n );
    console.log( solve(5n), 42n );
    console.log( solve(6n), 132n );
    console.log( solve(7n), 429n );
    console.log( solve(8n), 1430n );
    console.log( solve(20n), 6564120420n );
  }