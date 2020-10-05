// https://www.codewars.com/kata/5f6d120d40b1c900327b7e22/train/javascript

const leaderboardSort = (l, c) => {
    c.forEach(e => {
        let [name, ch] = e.split(" ");
        let oP = l.indexOf(name);
        let amount = Number(ch.slice(1));
        let nP = ch[0] === "+" ? oP - amount : oP + amount;
        l.splice(oP, 1);
        l.splice(nP, 0, name);
    });
    return l;
};

console.log(
    leaderboardSort(
        ["John", "Brian", "Jim", "Dave", "Fred"],
        ["Dave +1", "Fred +4", "Brian -1"],
    ),
    " === ",
    ["Fred", "John", "Dave", "Brian", "Jim"],
);
console.log(
    leaderboardSort(
        ["Bob", "Larry", "Kevin", "Jack", "Max"],
        ["Max +3", "Kevin -1", "Kevin +3"],
    ),
    " === ",
    ["Bob", "Kevin", "Max", "Larry", "Jack"],
);
