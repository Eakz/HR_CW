// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

const spacey = (array) => {
    let middleware = "";
    return [
        ...array.map((e) => {
            middleware += e;
            return middleware;
        }),
    ];
};

console.log(spacey(["kevin", "has", "no", "space"]), [
    "kevin",
    "kevinhas",
    "kevinhasno",
    "kevinhasnospace",
]);
console.log(spacey(["this", "cheese", "has", "no", "holes"]), [
    "this",
    "thischeese",
    "thischeesehas",
    "thischeesehasno",
    "thischeesehasnoholes",
]);
