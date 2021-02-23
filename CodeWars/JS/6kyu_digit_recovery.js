// https://www.codewars.com/kata/5964d7e633b908e172000046/train/javascript

const sequals = (digit, shuffled) =>
  [...digit].sort().join("") == [...shuffled].sort().join("")

function recover(str) {
  let result = ""
  
  for (let i = 0; i < str.length; i++)
    for (const digit of Object.keys(alph))
      if (sequals(digit, str.slice(i, i + digit.length))) {
        result += alph[digit]
        break
      }

  return result || "No digits found"
}
console.log(recover("NEO"), "1");
console.log(recover("ONETWO"), "12");
console.log(recover("TWWTONE"), "21");
console.log(recover("ZYX"), "No digits found");
console.log(recover("ONENO"), "11");
console.log(recover("NEOTWONEINEIGHTOWSVEEN"), "12219827");
