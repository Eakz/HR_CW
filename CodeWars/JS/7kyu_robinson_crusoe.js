// https://www.codewars.com/kata/5d95b7644a336600271f52ba

function crusoe(n, d, ang, distmult, angmult) {
    var x = 0.0,
        y = 0.0,
        a = (ang * Math.PI) / 180.0;
    for (let i = 1; i <= n; i++) {
        x += d * Math.cos(a);
        y += d * Math.sin(a);
        d *= distmult;
        a *= angmult;
    }
    return [x, y];
}

console.log(crusoe(8, 0.22, 3, 1.01, 1.15)); // [1.814652098870, 0.164646220964]);
console.log(crusoe(29, 0.13, 21, 1.01, 1.09)); //  [0.318341393410, 2.292862212314]);
console.log(crusoe(45, 0.1, 3, 1.01, 1.1)); //  [2.689897523779, 2.477953232467]);
console.log(crusoe(14, 0.22, 20, 1.02, 1.14)); //  [1.774076472485, 2.557008479031]);
console.log(crusoe(42, 0.11, 17, 1.02, 1.09)); //  [0.528555980656, 2.196434600133]);
