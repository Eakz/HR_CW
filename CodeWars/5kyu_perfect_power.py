# A perfect power is a classification of positive integers:

#     In mathematics, a perfect power is a positive integer
#     that can be expressed as an integer power of another
#     positive integer. More formally, n is a perfect power
#     if there exist natural numbers m > 1, and k > 1 such that mk = n.

# Your task is to check wheter a given integer is a perfect power.
# If it is a perfect power, return a pair m and k with mk = n as a proof.
#  Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

# Note: For a perfect power, there might be several pairs. For example 81 =
#  3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take
#   care of this, so if a number is a perfect power, return any pair that proves it.
# Examples

# isPP(4) => [2,2]
# isPP(9) => [3,2]
# isPP(5) => None


# def isPP(n):
#     for a in range(int(n**0.25+1)):
#         for b in range(int(n*1.5)):
#             if b**a==n:
#                 if b<=a:
#                     return [a,b]
#                 else:
#                     return [b,a]
#             elif b**a>n**2:
#                 return

# def isPP(n):
#     import math
#     rng=int(n**0.5+1)
#     min=int(n**0.5*float('.{}1'.format("0"*int(len(str(n))/3))))
#     print(min)
#     power_range=math.ceil(math.log2(n))
#     for a in range(power_range,1,-1):
#         for b in range(rng,min,-1):
#             if a**b==n:
#                 return [a,b]
#             elif b**a==n:
#                 return [b,a]
#             elif a**b<n or b**a<n:
#                 break
def isPP(n):
    import math
    pwr_range=math.ceil(math.log2(n)+1)
    for a in range(pwr_range**2):
        for b in range(2,pwr_range):
            if math.pow(a,b)==n:
                return [a,b]


# print(is_power(32,2))
# print(isPP(9))#, [3, 2], "9 = 3^2")
# # print(isPP(5))#, None, "5 isn't a perfect power")
# print(isPP(4))#, [2, 2], "4 = 2^2")
# print(isPP(32))
# print(isPP(27))
# print(isPP(32))
# print(isPP(912673))
# print(isPP(6434856))
# print(isPP(4,2))

pp = [
    4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128, 144, 169, 196,
    216, 225, 243, 256, 289, 324, 343, 361, 400, 441, 484
]

for i in pp:
    print(f'Nomber is {i}, answer is = ',isPP(i))