// https://www.codewars.com/kata/5e9df3a0a758c80033cefca1/train/javascript
// Operations +, -, * , /, ^, %

// slow version
function noOrder(s) {
    const pattern = /\d+[%]?\D?\d+/;
    let current;
    s=s.split(' ').join('');
    while (s.match(/\D+/)){
    if(s.match(pattern)){
    current = s.match(pattern)[0];
    }else{
    s=Math.floor(eval(s.replace('^','**')));
    return s&s!==0?parseInt(s):null;
    }
    let processes = Math.floor(eval(current.replace('^','**')));
    s=s.replace(current,processes);
    }
    return s&&s!==0?parseInt(s):null
}

// fast version
function noOrder(s) {
    while (/\d+ *[-+\*\/%^]/.test(s)){
      s = s.replace(/\s+/g,"")
          .replace(/^-?\d+[-+*\/%^]-?\d+/, x => eval(x.replace("^","**")))
          .replace(/-?\d+\.\d+/, x => Math.floor(+x))
      if (/N/i.test(s)) return null
    } 
    return +s
  }
  
console.log(noOrder("2 + 3- 4*1   ^  3")); //  1);
console.log(noOrder("2 + 3 +5 % 3 * 100"))
console.log(noOrder("7 *  3 - 3/  10  0")); //  0);
console.log(noOrder("1 20% 0 + 9")); //  null);
console.log(noOrder("6 9* 2+6 /  0")); //  null);
