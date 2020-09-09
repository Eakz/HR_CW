let container = document.getElementById("btns");

// let row = [];
// for (let i = 1; i < 10; i++) {
//     let element = document.createElement("button");
//     element.id = `btn${i}`;
//     element.className = "btn";
//     element.addEventListener("mousedown", () => {
//         element.style.backgroundColor = "green";
//     });
//     element.addEventListener("mouseup", () => {
//         element.style.backgroundColor = "#ccc";
//     });
//     element.innerHTML = i;
//     container.appendChild(element);
// }

let btn5 = document.getElementById("btn5");
const rotate = matrix => {
    let col = 0,
        row = 0,
        maxCol = matrix[0].length,
        maxRow = matrix.length;
    while (maxCol - col > 1 && maxRow - row > 1) {
        let previous = matrix[row + 1][col];
        for (let c = col; c < maxCol; c++) {
            let current = matrix[row][c];
            [matrix[row][c], previous] = [previous, current];
        }
        row++;
        for (let r = row; r < maxRow; r++) {
            let current = matrix[r][maxCol - 1];
            [matrix[r][maxCol - 1], previous] = [previous, current];
        }
        maxCol--;
        for (let c = maxCol - 1; c > col - 1; c--) {
            let current = matrix[maxRow - 1][c];
            [matrix[maxRow - 1][c], previous] = [previous, current];
        }
        maxRow--;
        for (let r = maxRow - 1; r > row - 1; r--) {
            let current = matrix[r][col];
            [matrix[r][col], previous] = [previous, current];
        }
        col++;
    }
    return matrix;
};
const assignment = (m, e) => {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[0].length; j++) {
            document.getElementById(e[i][j]).innerHTML = m[i][j];
        }
    }
};
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let elements = [
    ["btn1", "btn2", "btn3"],
    ["btn4", "btn5", "btn6"],
    ["btn7", "btn8", "btn9"],
];
btn5.addEventListener("click", e => {
    let nevo = rotate(matrix);
    assignment(nevo, elements);
});
