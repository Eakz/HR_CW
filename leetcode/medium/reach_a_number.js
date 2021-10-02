

var reachNumber = function (target) {
    let c = 0;
    target=Math.abs(target)
    while (0 < target) {
        target -= ++c
    }
    return target % 2 == 0 ? c : c + 1 + c % 2
}
console.log(reachNumber(3))