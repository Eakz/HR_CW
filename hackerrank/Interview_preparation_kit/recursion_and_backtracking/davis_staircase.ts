function stepPerms(n: number): number {
    const attempts = {};
    const stepOptions = [1, 2, 3];
    function deviation(n: number, stepOptions: number[], attempts: any) {
        let repeats = 0;
        for (let i = 0; i < stepOptions.length; i++) {
            if (n - stepOptions[i] === 0) {
                repeats++
            } else if (n - stepOptions[i] > 0) {
                if (!attempts[n - stepOptions[i]]){
                    attempts[n - stepOptions[i]] = deviation(n - stepOptions[i], stepOptions, attempts);
                    
                }
                repeats += attempts[n - stepOptions[i]]
            }
        
        
    }
    return repeats
    }
    return deviation(n, stepOptions, attempts)
}


console.log(stepPerms(5))