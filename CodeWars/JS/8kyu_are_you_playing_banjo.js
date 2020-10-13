// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
    return `${name} ${
        name[0].toLowerCase() === "r" ? "plays banjo" : "does not play banjo"
    }`;
}

console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");
