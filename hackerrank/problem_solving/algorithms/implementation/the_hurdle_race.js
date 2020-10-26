// https://www.hackerrank.com/challenges/the-hurdle-race/problem/

const hurdleRace = (k, h) =>
    h.filter(e => e > k).sort((a, b) => b - a)[0] - k || 0;
