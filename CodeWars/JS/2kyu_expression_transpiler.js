// https://www.codewars.com/kata/597ccf7613d879c4cb00000f/train/javascript

const nameOrNumber = "[_A-Za-z][_\\w]*|\\d+";
const oneOrMore = (regex, sep) => `(?:${regex})(?:${sep}(?:${regex}))*`;
const lambdaparam = oneOrMore(nameOrNumber, '\\s*,\\s*');
const lambdastmt = oneOrMore(nameOrNumber, '\\s+');
const lambda = `\\{\\s*(?:${lambdaparam}\\s*->\\s*)?(?:${lambdastmt})?\\s*\\}`;
const lambdaR = `^\\{\\s*(?:(${lambdaparam})\\s*->\\s*)?(${lambdastmt})?\\s*\\}$`;
const expression = `(?:${lambda})|(?:${nameOrNumber})`;
const parameters = oneOrMore(expression, '\\s*,\\s*');
const fn = `\\s*(?:(${expression})\\s*\\(\\s*(${parameters})?\\s*\\)\\s*(${lambda})?)\\s*|(?:(${expression})\\s*(${lambda}))\\s*`;

function exprT(e){
  if(!e) return '';
  e = e.trim();
  if(e.match(new RegExp(`^${nameOrNumber}$`))) {
    return e;
  }
  else {
    let [_0, param, stmt] = e.match(new RegExp(lambdaR));
    return lambdaT(param, stmt);
  }
}
function paramT(params) {
  params = params.replace(/\s+/g, ' ');
  console.log(params);
  if(params.match(new RegExp(`^(?:${expression})$`))) {
    return exprT(params);
  }
  let pars = [];
  while(params.match(new RegExp(`^\\s*(${expression})\\s*,\\s*`))){
    var [paramFull, param] = params.match(new RegExp(`^(${expression})\\s*,\\s*`));
    pars.push(param);
    params = params.slice(paramFull.length);
  }
  pars.push(params.match(new RegExp(`^\\s*(${expression})\\s*`))[1])
  return pars.map(exprT).join(',')
}
function stmtT(s){ return s ? `${s.replace(/\s+/g, ';')};` : '' }
function lambdaT(param, s){ return `(${param ? param.replace(/\s+/g, '') : ''}){${stmtT(s)}}`}


transpile = (program) => {
    console.log(program);
    let fnText = new RegExp(`^(?:${fn})$`);
    let res = program.match(fnText);
    var par;
    console.log(res);
    if(!res) return null;
    if(res[4]){
      var [_0, _1, _2, _3, exp, lam] = res;
      
    }
    else {
      var [_0, exp, par, lam, _4, _5] = res;
    }
    if(lam){
      par = `${par || ''}${par ? ',' : ''}${lam}`;
    }
    return `${exprT(exp)}(${par ? paramT(par) : ''})`;
    
}

function replaceLambdas(program) {
  let re = /{ *((\w+ *, *)*\w+ *->|) *(\w+\s*)* *}/gi;
  let lambdas = new Set()
  while(true) {
    let p = re.exec(program);
    if (!p) break;
    lambdas.add(p[0]);
  }
  lambdas = Array.from(lambdas);
  for (let lambda of lambdas) {
    let args = "";
    let body = "";
    if (lambda.includes('->')) {
      args = lambda.slice(1).split('->')[0].replace(/ /g,'');
      body = lambda.slice(1, lambda.length-1).split('->')[1];
      let vars = body.match(/\w+\s*/g);
      body = vars ? vars.map((v) => v+';').join('').replace(/\n/g,'') : "";
    } else {
      let vars = lambda.match(/\w+\s*/g);
      body = vars ? vars.map((v) => v+';').join('').replace(/\n/g,'') : "";
    }
    // if (body.length) body += ';';
    let formatted = `(${args}){${body}}`;
    program = program.replace(new RegExp(lambda, 'g'), formatted);
  }
  return program;
}

function validArgs(program) {
  // console.log('validArgs');
  let re = /\([a-z\d, _]*\)/gi;
  let matches = program.match(re);
  if (!matches) return false;
  for (let match of matches) {
    let matched = match.match(/[a-z_\d]+ +[a-z_\d]+/gi);
    if (matched) {
      return false;
    }
  }
  // console.log('valid');
  return true;
}


function removeOuterLambda(program) {
  let outerLambda = program.match(/^(\d+|[a-z_]\w*)\(((([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*}),)*([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*})|)\)\((\w+,)*\w*\){(\w+;)*}$/gi);
  if (outerLambda) {
    outerLambda = program.match(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    program = program.replace(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    if (program.includes('(')) {
      while(program[program.length-1] !== ')') program = program.slice(0, program.length-1);
      program = program.slice(0, program.length-1);
      if (program[program.length-1] === '(') {
        program += outerLambda[0] + ')';
      } else {
        program += ',' + outerLambda[0] + ')';
      }
    } else {
      program += '(' + outerLambda[0] + ')';
    }
  }
  outerLambda = program.match(/^\((\w+,)*\w*\){(\w+;)*}\(((([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*}),)*([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*})|)\)\((\w+,)*\w*\){(\w+;)*}$/gi);
  if (outerLambda) {
    outerLambda = program.match(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    program = program.replace(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    if (program.includes('(')) {
      while(program[program.length-1] !== ')') program = program.slice(0, program.length-1);
      program = program.slice(0, program.length-1);
      if (program[program.length-1] === '(') {
        program += outerLambda[0] + ')';
      } else {
        program += ',' + outerLambda[0] + ')';
      }
    } else {
      program += '(' + outerLambda[0] + ')';
    }
  }
  outerLambda = program.match(/^(\d+|[a-z_]\w*)((([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*}),)*([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*})|)$/gi);
  if (outerLambda) {
    outerLambda = program.match(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    if (!outerLambda) return program;
    program = program.replace(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    program += '(' + outerLambda + ')';
  }
  return program;
}

function formatDouble(program) {
  let outerLambda = program.match(/^\((\w+,)*\w*\){(\w+;)*}\((\w+,)*\w*\){(\w+;)*}$/gi);
  if (outerLambda) {
    let end = program.match(/\((\w+,)*\w*\){(\w+;)*}$/gi);
    program = program.replace(/\((\w+,)*\w*\){(\w+;)*}$/gi, '');
    program += '(' + end[0] + ')'
    // console.log(end[0]);
  }
  return program;
}

function transpile(program){
  console.log(program)
  while(program[0] === ' ') program = program.slice(1);
  program = program.replace(/\n/g, ' ');
  // console.log(program);

  if (program.replace(/ /g,'').includes(',)')) return null;
  program = replaceLambdas(program);
  if (!validArgs(program)) return null;
  program = program.replace(/ /g, '').replace('),',',');
  program = removeOuterLambda(program);
  program = formatDouble(program);
  // console.log('program',program);
  // console.log('program',program);
  // For a function call
  let re = /^(\d+|[a-z_]\w*)\(((([a-z_]\w*|\d+|\(((([a-z_]\w*|\d+),)*([a-z_]\w*|\d+)|)\){(\w+;)*}),)*([a-z_]\w*|\d+|\(((([a-z_]\w*|\d+),)*([a-z_]\w*|\d+)|)\){(\w+;)*})|)\)$/gi;
  let match = program.match(re);
  if (match) return program;
  // console.log(program);
  // outside bracket
  re = /^\((\w+,)*\w*\){(\w+;)*}\(((([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*}),)*([a-z_]\w*|\d+|\((\w+,)*\w*\){(\w+;)*})|)\)$/gi;
  match = program.match(re);
  if (match) return program;
  return null;
}

console.log(transpile("call()")); // "call()")
console.log(transpile("callFunc(a)")); // "callFunc(a)")
console.log(transpile("callFunc(123)")); // "callFunc(123)")
console.log(transpile("%^&*(")); //FAIL
console.log(transpile("x9x92xb29xub29bx120()!(")); //FAIL
console.log(transpile("invoke(a, 1, b, 2)")); // "invoke(a,1,b,2)")
console.log(transpile("call({})")); // "call((){})")
console.log(transpile("f({a->})")); // "f((a){})")
console.log(transpile("call(\n){}")); // "call((){})")
console.log(transpile("call{}")); // "call((){})")
console.log(transpile("f(x){a->}")); // "f(x,(a){})")
console.log(transpile("f(){->a}")); //FAILs
console.log(transpile("run{a}")); // "run((){a;})")
console.log(transpile("{}()")); // "(){}()")
console.log(transpile("{a->a}(233)")); // "(a){a;}(233)");
