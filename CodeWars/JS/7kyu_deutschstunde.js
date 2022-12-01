// https://www.codewars.com/kata/52cd8624a414ec2b2000086

function derDieDas(wort){
  const vowels = 'aeiouäöü';
  const count = [...wort.toLowerCase()].filter(letter=>vowels.includes(letter)).length;
  let article = 'das';
  if(count===2||count===3) article='die';
  if(count>3) article='der';
  return `${article} ${wort}`
}

if(require.main.path.includes('mocha')){
  const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(derDieDas('OOOpa'), 'der OOOpa', '4 Vokale -> der OOOpa');
    assert.strictEqual(derDieDas('Suppenhuhn'), 'die Suppenhuhn', '3 Vokale -> die Suppenhuhn');
    assert.strictEqual(derDieDas('Geheimdienst'), 'der Geheimdienst', '5 Vokale -> der Geheimdienst');
    assert.strictEqual(derDieDas('Ofenkartoffel'), 'der Ofenkartoffel', '5 Vokale -> der Ofenkartoffel');
    assert.strictEqual(derDieDas('Fisch'), 'das Fisch', '1 Vokal -> das Fisch');
    assert.strictEqual(derDieDas('Knödel'), 'die Knödel', '1 Umlaut, 1 Vokal -> die Knödel');
    assert.strictEqual(derDieDas('Leberkaassemmi'), 'der Leberkaassemmi', '6 Vokale -> der Leberkaassemmi');
    })
  })

}else{
    console.log(derDieDas('OOOpa'), 'der OOOpa', '4 Vokale -> der OOOpa');
    console.log(derDieDas('Suppenhuhn'), 'die Suppenhuhn', '3 Vokale -> die Suppenhuhn');
    console.log(derDieDas('Geheimdienst'), 'der Geheimdienst', '5 Vokale -> der Geheimdienst');
    console.log(derDieDas('Ofenkartoffel'), 'der Ofenkartoffel', '5 Vokale -> der Ofenkartoffel');
    console.log(derDieDas('Fisch'), 'das Fisch', '1 Vokal -> das Fisch');
    console.log(derDieDas('Knödel'), 'die Knödel', '1 Umlaut, 1 Vokal -> die Knödel');
    console.log(derDieDas('Leberkaassemmi'), 'der Leberkaassemmi', '6 Vokale -> der Leberkaassemmi');
}
