// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    type TOpeningBrackets = '('|'['|'{'
    type TClosingBrackets = ')'|']'|'}'
    const matching:{[key in TOpeningBrackets]:TClosingBrackets} = {
        '(':')',
        '[':']',
        '{':'}',
    }
    const parQueue:TOpeningBrackets[] = [];
    for (let i=0;i< s.length; i++){
        const cur = s[i];
        if(cur in matching){
            parQueue.push(cur as TOpeningBrackets)
        } else if (!parQueue.length){
            return false
        } else {
            const lastPar = parQueue.pop()!;
            if(matching[lastPar]!==cur){
                return false
            }
        }
    }
    return !parQueue.length
};

// Tests
console.log(isValid("()"), true)
console.log(isValid("()[]{}"), true)
console.log(isValid("(]"), false)
console.log(isValid("([)]"), false)
console.log(isValid("{[]}"), true)


