// https://www.codewars.com/kata/5e4eb72bb95d28002dbbecde/
// solution #1
const regexContainsAll = (str) => {
    regex = "";
    for (i of str) {
        regex += `(?=.*${i})`;
    }
    return regex;
};

// solution #2 (got it after solving)
function regexContainsAll(str) {
    return str.replace(/./g, "(?=.*$&)");
}

//       const pattern = regexContainsAll(abc);
//       assert.isTrue(new RegExp(pattern).test("bca"), assertionMsg("bca", abc, pattern));
//       assert.isTrue(new RegExp(pattern).test("baczzz"), assertionMsg("baczzz", abc, pattern));
//       assert.isFalse(new RegExp(pattern).test("ac"), assertionMsg("ac", abc, pattern));
//       assert.isFalse(new RegExp(pattern).test("bc"), assertionMsg("bc", abc, pattern));
//       assert.isFalse(new RegExp(pattern).test("cb"), assertionMsg("cb", abc, pattern));
//     });
//   });
