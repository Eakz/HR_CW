// https://www.codewars.com/kata/56ae72854d005c7447000023/train/javascript

// Without replace callback
function createTemplate(template) {
    return function (args) {
        let temp = template.slice();
        const regexAll = new RegExp(/\{\{\w+\}\}/,'g');
        for (let key in args) {
            const regex = new RegExp(`\{\{${key}\}\}`, 'g');

            temp = temp.replace(regex, args[key], 'g');
        }
        temp = temp.replace(regexAll, '');
        return temp;
    };
}
// Replace callback
const createTemplate = template => {
    return vars => template.replace(/{{(\w+)}}/g, (m, v) => vars[v] || '');
  };
let personTmpl = createTemplate('{{name}} likes {{animalType}}');
console.log(personTmpl({ name: 'John', animalType: 'dogs' }), 'John likes dogs');

let personTmpl2 = createTemplate('{{firstName}} {{lastName}} likes {{interests}}');
console.log(
    personTmpl2({ firstName: 'Albert', lastName: 'Einstein', occupation:"doctor" }),
    'John likes dogs',
);
