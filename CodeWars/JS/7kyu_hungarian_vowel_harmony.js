function dative(word) {
    let nek = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
    let nak = ["a", "á", "o", "ó", "u", "ú"];
    return `${word}${
        nek.includes(
            word
                .split("")
                .filter(el => [...nek, ...nak].includes(el))
                .slice(-1)[0],
        )
            ? "nek"
            : "nak"
    }`;
}
