// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

const dup = s => {
    return s.map(e => {
        let changed = false;
        do {
            for (let i = 0; i < e.length - 1; i++) {
                if (e[i] === e[i + 1]) {
                    e = e.slice(0, i) + e.slice(i + 1);
                    changed = true;
                    break;
                } else {
                    changed = false;
                }
            }
        } while (changed);
        return e;
    });
};

// smart solution I should've guessed myself

function dup(s) {
    return s.map(x => x.replace(/(.)\1+/g, "$1"));
}
console.log(
    dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]),
    "===",
    ["codewars", "picaniny", "hubububo"],
);
console.log(dup(["abracadabra", "allottee", "assessee"]), "===", [
    "abracadabra",
    "alote",
    "asese",
]);
console.log(dup(["kelless", "keenness"]), "===", ["keles", "kenes"]);
console.log(
    dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]),
    "===",
    ["Wolomolo", "flodoromonlighters", "chuchchi"],
);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), "===", [
    "adanac",
    "sones",
    "toles",
    "pele",
]);
console.log(dup(["callalloo", "feelless", "heelless"]), "===", [
    "calalo",
    "feles",
    "heles",
]);
console.log(dup(["putteellinen", "keenness"]), "===", ["putelinen", "kenes"]);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), "===", [
    "keles",
    "voradospulen",
    "achcha",
]);
