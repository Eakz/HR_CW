let container = document.getElementById("btns");
let row = [];
for (let i = 1; i < 10; i++) {
    let element = document.createElement("td");
    element.id = `btn${i}`;
    element.className = "btn";
    element.innerHTML = i;
    row.push(element);
    if (i % 3 == 0) {
        let tr = document.createElement("tr");
        for (let r of row) {
            tr.appendChild(r);
        }
        container.appendChild(tr);
        row = [];
    }
}
let btn5 = document.getElementById("btn5");
let values = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
for(let x=0;x<=3;)
