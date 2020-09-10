res = document.getElementById("res");

btns = document.getElementById("btns");
btns.childNodes.forEach(e => {
    if (e.tagName === "BUTTON" && e.id !== "btnClr" && e.id !== "btnEql") {
        e.addEventListener("click", () => {
            res.innerHTML += e.innerHTML;
        });
    } else if (e.id === "btnClr") {
        e.addEventListener("click", () => {
            res.innerHTML = "";
        });
    } else if (e.id === "btnEql") {
        e.addEventListener("click", () => {
            let sign = res.innerHTML
                .split("")
                .filter(e => "+-*/".includes(e))[0];
            let [num1, num2] = res.innerHTML.split(sign);
            res.innerHTML = Number(
                eval(`${parseInt(num1, 2)}${sign}${parseInt(num2, 2)}`),
            ).toString(2);
        });
    }
});
