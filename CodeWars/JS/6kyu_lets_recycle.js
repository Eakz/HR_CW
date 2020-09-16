// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

// paper, glass, organic, plastic

const recycle = a => {
    let result = [[], [], [], []];
    console.log(result);
    let position = { paper: 0, glass: 1, organic: 2, plastic: 3 };
    a.forEach(e => {
        result[position[e.material]].push(e.type);
        if (e.secondMaterial) {
            result[position[e.secondMaterial]].push(e.type);
        }
    });
    return result;
};
const recyclerMaterials = ["paper", "glass", "organic", "plastic"];

function recycle(objects) {
    return recyclerMaterials.map(m =>
        objects
            .filter(o => o.material == m || o.secondMaterial == m)
            .map(o => o.type),
    );
}
let a = [
    { type: "rotten apples", material: "organic" },
    {
        type: "out of date yogurt",
        material: "organic",
        secondMaterial: "plastic",
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];
let b = [
    ["wine bottle", "amazon box", "beer bottle"],
    ["wine bottle", "beer bottle"],
    ["rotten apples", "out of date yogurt"],
    ["out of date yogurt"],
];
console.log(recycle(a), b);
