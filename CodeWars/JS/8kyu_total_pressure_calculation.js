// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/train/javascript

function solution(M1, M2, m1, m2, V, T) {
    M1 = m1 * 0.001/M1;
    M2 = m2 * 0.001/M2;
    T = T + 273.15;
  var R = 0.082;

  return (((M1 + M2) * R * T) / V) * 1000;
}

console.log(solution(44, 30, 3, 2, 5, 50), 0.7146511212121212);
console.log(solution(60, 20, 10, 30, 10, 100), 5.099716666666667);

