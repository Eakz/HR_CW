function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    console.log(
      i % 15 === 0 ? 'FizzBuzz' :
      i % 3 === 0 ? 'Fizz' :
      i % 5 === 0 ? 'Buzz' :
      i
    );
  }
}
