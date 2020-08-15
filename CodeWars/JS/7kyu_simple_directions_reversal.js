// https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript

const solve = (arr) => {
    let answer = [];
    arr.reverse().forEach((e, i) => {
        let Replace =
            i === 0
                ? "Begin"
                : arr[i - 1].split(" ")[0] === "Right"
                ? "Left"
                : "Right";
        answer.push([Replace, ...arr[i].split(" ").slice(1)].join(" "));
    });
    return answer;
};

console.log(
    solve(["Begin on 3rd Blvd", "Right on First Road", "Left on 9th Dr"]),
    ["Begin on 9th Dr", "Right on First Road", "Left on 3rd Blvd"],
);
console.log(
    solve([
        "Begin on Road A",
        "Right on Road B",
        "Right on Road C",
        "Left on Road D",
    ]),
    ["Begin on Road D", "Right on Road C", "Left on Road B", "Left on Road A"],
);
console.log(solve(["Begin on Road A"]), ["Begin on Road A"]);
