function pickingNumbers(a) {
    let globalCount = {};
    for (let el of a) {
        if (globalCount[el]) {
            globalCount[el]++;
        } else {
            globalCount[el] = 1;
        }
    }
    let results = [];
    for (let i of new Set(a)) {
        results.push(
            globalCount[i] + (globalCount[i + 1] ? globalCount[i + 1] : 0),
        );
    }
    return Math.max(...results);
}
