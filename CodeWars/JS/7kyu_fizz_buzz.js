// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

// Return an array
fizzbuzz = n=>[...Array(n+1).keys()].slice(1).map(e=>e%5===0&&e%3===0?'FizzBuzz':e%5===0?"Buzz":e%3===0?"Fizz":e)


var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
console.log(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
