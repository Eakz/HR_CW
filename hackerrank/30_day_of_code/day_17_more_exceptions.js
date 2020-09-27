class Calculator {
    power(n, p) {
        try {
            if (n >= 0 && p >= 0) {
                return n ** p;
            } else {
                throw Error("n and p should be non-negative");
            }
        } catch (e) {
            return e.message;
        }
    }
}
