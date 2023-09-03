// Task: make a function that takes string in camelCase and makes it snake_case

function camelToSnake(str){
    const regExp = new RegExp(/\w{1}[A-Z]{1}/g);
    console.log(str.replaceAll(regExp, val=>`${val[0]}_${val[1].toLowerCase()}`))
}

camelToSnake('torinGasdFlag Flag flag')