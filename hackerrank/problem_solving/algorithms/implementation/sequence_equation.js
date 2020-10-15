// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
    return p.map((e, i) => p.indexOf(p.indexOf(i + 1) + 1) + 1);
}
