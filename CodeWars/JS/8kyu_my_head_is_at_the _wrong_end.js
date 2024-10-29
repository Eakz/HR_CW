function fixTheMeerkat(arr) {
    return [arr[2],arr[1],arr[0]]
   }



if (require.main.path.includes('mocha')) {
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;
    
    describe("Basic tests",() =>{
      it("Testing for fixed tests", () => {
        assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
        assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
        assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
        assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
        assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
      })
    })
} else {
    console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
}