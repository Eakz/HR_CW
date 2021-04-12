// https://www.codewars.com/kata/56484848ba95170a8000004d/train/typescript

export class G964 {
    public static gps = (s: number, x: number[]) => {
        if (x.length <= 1) return 1;
        return Math.floor(
            Math.max(
                ...x
                    .map((e: number, i: number) => {
                        if (i !== x.length - 1) {
                            let distance = ((x[i + 1] - e) * 3600) / s;
                            return distance <= 1 ? 0 : distance;
                        }
                    })
                    .slice(0, -1),
            ),
        );
    };
}

const x = [
    0.0,
    0.11,
    0.22,
    0.33,
    0.44,
    0.65,
    1.08,
    1.26,
    1.68,
    1.89,
    2.1,
    2.31,
    2.52,
    3.25,
];
const s = 12;
console.log(G964.gps(s, x));
