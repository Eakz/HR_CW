import json


def isPrime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    for i in range(2, int(n**0.5+1)):
        if(n % i == 0):
            return False
    return True


result = []
i = 2
while(len(result) < 10002):
    if(isPrime(i)):
        result.append(i)
    i += 1

with open('primes.json', 'w') as file:
    json.dump(result, file)
