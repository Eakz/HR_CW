// https://www.codewars.com/kata/598ab63c7367483c890000f4/train/javascript

function stringTask(s) {
    return s
        .toLowerCase()
        .replace(/[aeiouy]/g, "")
        .replace(/./g, v => "." + v);
}
[
    { s: "tour", ans: ".t.r" },
    { s: "Codewars", ans: ".c.d.w.r.s" },
    { s: "aBAcAba", ans: ".b.c.b" },
    { s: "tour", ans: ".t.r" },
    { s: "a", ans: "" },
].forEach(t => console.log(stringTask(t.s), " === ", t.ans));
