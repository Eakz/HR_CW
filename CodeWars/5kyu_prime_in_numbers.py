# Given a positive number n > 1 find the prime factor
# decomposition of n. The result will be a string with
# the following form :
#
#  "(p1**n1)(p2**n2)...(pk**nk)"
#
# with the p(i) in increasing order and n(i) empty if n(i) is 1.
#
# Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


# def isPrime(n):
#     if n==2 or n==3: return True
#     if n%2==0 or n<2: return False
#     for i in range(3,int(n**0.5)+1,2):
#         if n%i==0:
#             return False
#
#     return True
#
# def primeFactors(n):
#     result = []
#
#     for i in range(2, int(n**0.5)):
#         if n != 0 and isPrime(i):
#             while n % i == 0:
#                 n -= int(n / i)
#                 result.append(i)
#
#         elif not isPrime(i):
#             continue
#         else:
#             break
#     return ''.join([
#         f"({i}**{result.count(i)})" if result.count(i) > 1 else f'({i})'
#         for i in sorted(set(result))
#     ])

def primeFactors(n):
    result = ''
    for i in range(2, n + 1):
        pow = 0
        while(n % i == 0):
            pow += 1
            n /= i
        if pow > 0:
            result += '({}{})'.format(i, f'**{pow}' if pow > 1 else '')
        if n == 1:
            return result


from numpy import prod
b = primeFactors(7775460)
print(b)  # "(2**2)(3**3)(5)(7)(11**2)(17)")
# with open('prime_in_numbers.py','a') as file:
#
#     [print(i,end=',',file=file) for i in range(2,1020) if isPrime(i)]
