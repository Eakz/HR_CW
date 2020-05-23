function toChineseNumeral(num) {
    var numerals = {
        "-": "负",
        ".": "点",
        0: "零",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九",
        10: "十",
        100: "百",
        1000: "千",
        10000: "万",
    };
    const big = [10000, 1000, 100, 10];
    let resultString = "";
    let afterDot = "";
    let sign;
    if (num < 0) {
        sign = true;
        num = Math.abs(num);
    } else {
        sign = false;
    }
    if (num.toString(10).includes(".")) {
        afterDot = "." + num.toString(10).split(".")[1];
        num = Math.floor(num);
    }
    if (num / 10 >= 1 && num / 10 < 2) {
        resultString += "10,";
        num -= 10;
    }
    let zeroed;
    for (i of big) {
        if (num / i >= 1) {
            resultString += `${Math.floor(num / i)},${i},`;
            num = num - Math.floor(num / i) * i;
            zeroed = true;
        } else {
            if (zeroed) {
                resultString += "0,";
                zeroed = false;
            }
        }
    }
    resultString += num;
    let decode;
    resultString ? (decode = resultString) : (decode = num.toString(10));
    decode = decode.trim(",").split(",");
    let lastItem = decode[decode.length - 1];
    while (decode[decode.length - 1] == 0 && decode.length > 1) {
        decode.pop();
    }
    if (afterDot) {
        decode = decode.concat(afterDot.split(""));
    }
    if (sign === true) {
        decode.unshift("-");
    }
    return decode.map((a) => numerals[a]).join("");
}

console.log(toChineseNumeral(9)) //'九');
console.log(toChineseNumeral(-5)); //'负五');
console.log(toChineseNumeral(0.5)) //'零点五');
console.log(toChineseNumeral(10)) //'十');
console.log(toChineseNumeral(110)) //'一百一十');
console.log(toChineseNumeral(111)) //'一百一十一');
console.log(toChineseNumeral(1000)) //'一千');
console.log(toChineseNumeral(10000)) //'一万');
console.log(toChineseNumeral(10006)) //'一万零六');
console.log(toChineseNumeral(10306.005)) //'一万零三百零六点零零五');
console.log(toChineseNumeral(99)) //);
console.log(toChineseNumeral(18)) //);
console.log(toChineseNumeral(99999.999)) //);
console.log(toChineseNumeral(-10.000001)) //)
