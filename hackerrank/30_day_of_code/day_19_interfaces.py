class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        return sum([i for i in range(1, int(n**0.5+n/2)) if n % i == 0])+n
