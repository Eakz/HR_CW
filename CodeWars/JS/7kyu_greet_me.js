// https://www.codewars.com/kata/535474308bb336c9980006f2

var greet = function (name='name') {
    return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`
};
console.log(greet("riley")); // 'Hello Riley!');
