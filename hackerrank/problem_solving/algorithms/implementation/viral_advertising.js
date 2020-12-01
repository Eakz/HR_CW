const viralAdvertising = (n, t = 5, c = 0) => {
    if (n === 1) return c + Math.floor(t / 2);
    return viralAdvertising(n - 1, Math.floor(t / 2) * 3, c + Math.floor(t / 2));
};
console.log(viralAdvertising(4), "===", 15);
console.log(viralAdvertising(3), "===", 9);
