function spEng(sentence) {
    const wordToCheck = "english"
    return sentence.toLowerCase().includes(wordToCheck)
}





if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe("Tests", () => {
        it("should test example cases", () => {
            assert.strictEqual(spEng("english"), true);
            assert.strictEqual(spEng("egnlish"), false);
        });
    });
} else {
            console.log(spEng("english"), true);
            console.log(spEng("egnlish"), false);
}
