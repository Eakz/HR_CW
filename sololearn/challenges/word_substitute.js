// Task: Substititu numerals in string for same words. E.G "1" to "one", "5" to "five".
// Range 0 - 10

function wordSubstitute(str) {
	const dict = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
	];
	const isNumber = new RegExp(/[0-9]+/g);
	return str.replaceAll(isNumber, (val) => dict[val] || val);
}

console.log(wordSubstitute("1 idiot is plenty of keep 10, 5 6, 7-8, 100"));
