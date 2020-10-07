// https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2/train/javascript
function solve(arr) {
    let t =
        arr
            .map(v => v.slice(0, 2) * 60 + +v.slice(-2))
            .sort((a, b) => a - b)
            .reduce((a, v, i, r) => {
                return a >
                    (b = isNaN(r[i + 1]) ? r[0] + 1440 - v : r[i + 1] - v)
                    ? a
                    : b;
            }, 0) - 1;
    return (
        ("0" + parseInt(t / 60)).slice(-2) + ":" + ("0" + (t % 60)).slice(-2)
    );
}
console.log(solve(["14:51"]), " === ", "23:59");
console.log(solve(["23:00", "04:22", "18:05", "06:24"]), " === ", "11:40");
console.log(
    solve(["21:14", "15:34", "14:51", "06:25", "15:30"]),
    " === ",
    "09:10",
);
