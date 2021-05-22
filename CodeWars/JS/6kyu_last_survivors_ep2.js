// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript

function lastSurvivors(str) {
    const getNext = l => {
        return String.fromCharCode(((l.charCodeAt() - 97 + 1) % 26) + 97);
    };
    return [...str].sort().reduce((acc, e) => {
        let curLetter = e;
        let curAcc = acc;
        while (curAcc.includes(curLetter)) {
            curAccIndex = [...curAcc].indexOf(curLetter);
            curAcc = curAcc.slice(0, curAccIndex) + curAcc.slice(curAccIndex + 1);
            curLetter = getNext(curLetter);
        }
        return curAcc + curLetter;
    }, "");
}

console.log(lastSurvivors("zzzab"));
