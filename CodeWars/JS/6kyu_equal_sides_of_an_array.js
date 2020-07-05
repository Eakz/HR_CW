// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
    let result = -1;
    const sum = (list) =>
        list.length > 0 ? list.reduce((acc, nom) => acc + nom) : 0;
    arr.forEach((el, i) => {
        if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) {
            result = i;
        }
    });
    return result;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3, "The array was: [20,10,30,10,10,15,35] \n");
