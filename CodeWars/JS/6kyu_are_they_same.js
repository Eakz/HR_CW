// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

const comp=(n1, n2)=>!!n1 && !!n2 &&n1.map(x => x*x).sort().join() == n2.sort().join()
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), true);