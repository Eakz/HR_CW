// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

const mirror = d => {
    let dS = d.slice();
    dS = dS.sort((a, b) => a - b);
    return dS.slice(0, -1).concat(dS.reverse());
};

fixed_tests = [
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [2, 1], expected: [1, 2, 1] },
    { input: [2, 3, 1], expected: [1, 2, 3, 2, 1] },
    {
        input: [-8, 42, 18, 0, -16],
        expected: [-16, -8, 0, 18, 42, 18, 0, -8, -16],
    },
];

for (const testCase of fixed_tests) {
    const { input, expected } = testCase;
    console.log(mirror(input), " === ", expected);
}
