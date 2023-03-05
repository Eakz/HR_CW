// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i] as keyof typeof romanMap
    const next = s[i + 1] as keyof typeof romanMap
    if (romanMap[current] < romanMap[next]) {
      result -= romanMap[current];
    } else {
      result += romanMap[current];
    }
  }
  return result;
}

// Tests
console.log(romanToInt('III'), 3);
console.log(romanToInt('IV'), 4);
console.log(romanToInt('IX'), 9);
console.log(romanToInt('LVIII'), 58);
console.log(romanToInt('MCMXCIV'), 1994);
