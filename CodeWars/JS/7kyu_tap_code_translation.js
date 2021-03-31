// https://www.codewars.com/kata/605f5d33f38ca800322cb18f/train/javascript
function tapCodeTranslation(text) {
    console.log(text);
    if(text.length===0) return ''
    function letterDict() {
        const result = {};
        let letterIndex = -1;
        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j < 6; j++) {
                letterIndex++;
                if (letterIndex === 10) letterIndex++;
                result[String.fromCharCode(65 + letterIndex)] = [i, j];
                if (letterIndex == 25) break;
            }
        }
        result['K']=result['C']
        return result;
    }
    const dict = letterDict();
      return [...text].map(e=>dict[e.toUpperCase()].map(n=>'.'.repeat(n)).join(' ')).join(' ')
}

// console.log(
//     tapCodeTranslation("test"),
//     ".... .... . ..... .... ... .... ....",
//     `Text: "test"`,
// );
// console.log(tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .", `Text: "total"`);
console.log(tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...", `Text: "break"`);
// console.log(tapCodeTranslation("something"), ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..", `Text: "something"`);
// console.log(tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .", `Text: "final"`);
