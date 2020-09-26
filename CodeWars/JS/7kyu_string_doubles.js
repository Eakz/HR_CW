// https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript

const doubles = (d = s => ((e = s.replace(/(\w)\1/g, "")) == s ? s : d(e)));

console.log(doubles("abbbzz"), "ab");
console.log(doubles("zzzzykkkd"), "ykd");
console.log(doubles("abbcccdddda"), "aca");
console.log(doubles("vvvvvoiiiiin"), "voin");
console.log(doubles("rrrmooomqqqqj"), "rmomj");
console.log(doubles("xxbnnnnnyaaaaam"), "bnyam");
