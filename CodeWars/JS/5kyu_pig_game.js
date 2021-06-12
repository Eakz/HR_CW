const stopAt = (m, n) => {
    let result = 0
    let procStat = { 0: 1 }
    let iter = 1
    while (!!Object.keys(procStat).length) {
        let u = {}
        for (let [k, v] of Object.entries(procStat)) {
            k = Number(k)
            for (let i = 2; i <= m; i++) {
                if ((k + i) >= n) {
                    result += v * (k + i) * ((1 / m) ** iter)
                } else {
                    u[k + i] = (u[k + i] || 0) + v
                }
            }
        }
        procStat = u
        iter += 1
    }
    return result
}

console.log(stopAt(2, 1));
console.log(stopAt(2, 1), 1.0);
console.log(stopAt(2, 2), 1.0);
console.log(stopAt(2, 3), 1.0);
console.log(stopAt(2, 4), 1.0);
console.log(stopAt(2, 5), 0.75);
console.log(stopAt(2, 6), 0.75);
console.log(stopAt(6, 1), 3.33333);
console.log(stopAt(6, 2), 3.33333);
console.log(stopAt(6, 3), 3.83333);
console.log(stopAt(6, 4), 4.30556);