const timeConversion = s => {
    if (s.split(":")[0] === "12") {
        let sign = s.slice(-2);
        s = s.slice(0, -2).split(":");
        s[0] = sign === "PM" ? "12" : "00";
        return s.join(":");
    }
    if (s.includes("PM")) {
        s = s.slice(0, -2).split(":");
        s[0] = Number(s[0]) + 12;
        return s.join(":");
    } else {
        return s.slice(0, -2);
    }
};

console.log(timeConversion("12:01:12PM"));
console.log(timeConversion("12:01:12AM"));
