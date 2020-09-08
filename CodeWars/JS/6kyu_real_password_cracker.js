// https://www.codewars.com/kata/59146f7b4670ba520900000a/train/javascript
const crypto = require("crypto");
function passwordCracker(hash) {
    const alphabet = " abcdefghijklmnopqrstuvwxyz";
    for (a of alphabet) {
        for (b of alphabet) {
            for (c of alphabet) {
                for (d of alphabet) {
                    for (e of alphabet) {
                        if (
                            crypto
                                .createHash("sha1")
                                .update(`${a}${b}${c}${d}${e}`.trim())
                                .digest("hex") === hash
                        ) {
                            return `${a}${b}${c}${d}${e}`.trim();
                        }
                    }
                }
            }
        }
    }
}

console.log(
    passwordCracker("e6fb06210fafc02fd7479ddbed2d042cc3a5155e") === "code",
);
console.log(
    passwordCracker("a94a8fe5ccb19ba61c4c0873d391e987982fbbd3") === "test",
);
