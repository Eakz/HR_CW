# https://www.codewars.com/kata/5635e7cb49adc7b54500001c

# simple
def solve(n):
    nominal_value=[500,200,100,50,20,10]
    amount = 0
    for i in nominal_value:
        if n>=i:
            amount+=(n//i)
            n%=i
    if not n:
        return amount
    else:
        return -1


print(solve(770))  # 4, "Wrong result for 770")
print(solve(550))  # 2, "Wrong result for 550")
print(solve(10))  # 1, "Wrong result for 10")
print(solve(1250))  # 4, "Wrong result for 1250")
print(solve(1500))  # 3,  "Wrong result for 1500")
print(solve(125))  # -1, "Wrong result for 125")
print(solve(666))  # -1, "Wrong result for 666")
print(solve(42))  # -1, "Wrong result for 42")
