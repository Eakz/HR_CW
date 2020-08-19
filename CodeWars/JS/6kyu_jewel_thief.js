var crack = function (safe, result = "", clicks = "") {
    if (result.split("-").length === 3) {
        safe.unlock(result);
        console.log(
            `This safe has combination ${result} and jewels worth $${safe.open()}`,
        );
        return safe.open();
    }
    clicks = clicks.length === 0 ? "click" : clicks + "-" + "click";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let R =
                result.length === 0 ? `R${i}${j}` : result + "-" + `R${i}${j}`;
            let L =
                result.length === 0 ? `L${i}${j}` : result + "-" + `L${i}${j}`;
            let clickR = safe.unlock(R);
            let clickL = safe.unlock(L);
            if (clickR === clicks) {
                return crack(safe, R, clicks);
            } else if (clickL === clicks) {
                return crack(safe, L, clicks);
            }
        }
    }
};
