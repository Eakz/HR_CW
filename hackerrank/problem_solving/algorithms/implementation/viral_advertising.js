const viralAdvertising = (n, t = 5, c = 0) => {
    let like = Math.floor(t / 2);
    if (n === 1) return c + like;
    return viralAdvertising(n - 1, like * 3, c + like);
};
console.log(viralAdvertising(4), "===", 15);
console.log(viralAdvertising(3), "===", 9);
