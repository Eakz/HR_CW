const fibonacci = n => {
    if (n == 0) {
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(5), " === ", 5);
console.log(fibonacci(12), " === ", 144);
console.log(fibonacci(17), " === ", 1597);

for (let i = 0; i < 15; i++) {
    console.log(fibonacci(i));
}
