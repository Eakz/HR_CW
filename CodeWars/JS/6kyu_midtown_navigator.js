// https://www.codewars.com/kata/59665001dc23af735700092b/train/javascript
// EAST - WEST 3-8 ave
// South - North 34-59 st

const midtownNav = (s, e) => {
    const exCoords = s => s.split("and").map(e => Number(e.replace(/\D/g, "")));
    s = exCoords(s);
    e = exCoords(e);
    let xDiff = s[1] - e[1];
    let yDiff = s[0] - e[0];
    return `Walk ${Math.abs(xDiff)} blocks ${
        xDiff < 1 ? "north" : "south"
    }, and ${Math.abs(yDiff)} blocks ${yDiff < 1 ? "west" : "east"}`;
};

console.log(
    midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"),
    " === ",
    "Walk 2 blocks south, and 1 blocks east",
);
console.log(
    midtownNav("5th Ave and W 46th St", "7th Ave and E 58th St"),
    " === ",
    "Walk 12 blocks north, and 2 blocks west",
);
