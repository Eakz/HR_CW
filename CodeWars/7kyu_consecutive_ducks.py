# Positive integers have so many gorgeous features. Some of them could be
# expressed as a sum of two or more consecutive positive numbers.
# Consider an Example :

#     10 , could be expressed as a sum of 1 + 2 + 3 + 4.

# Task

# Given Positive integer, N , Return true if it could be expressed as a sum
# of two or more consecutive positive numbers , OtherWise return false .
# Notes

#     Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .

# Input >> Output Examples:


# * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a
# sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

# * consecutiveDucks(64)  ==>  return (false)

# * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a
# sum of ( 9 + 10 + 11 + 12 ).

'''Working but slow algorithm''' 

# def consecutive_ducks(n):
#     for i in range(n):
#         sum=0
#         for b in range(i,n):
#             sum+=b
#             if sum==n:
#                 return True
#             elif sum>n:
#                 break
#     return False

def consecutive_ducks(n):
    from math import log
    return log(n,2)==int(log(n,2))

from math import log2

def consecutive_ducks(n):
    return not log2(n).is_integer()

# @test.describe("Consecutive ducks")
# def cd():
#     @test.it("Check Small Values")
#     def __():
print(consecutive_ducks(69)) # True)
print(consecutive_ducks(8)) # False)
print(consecutive_ducks(57)) # True)
print(consecutive_ducks(6)) # True)
print(consecutive_ducks(13)) # True)
print(consecutive_ducks(16)) # False)
print(consecutive_ducks(91)) # True)
print(consecutive_ducks(75)) # True)
print(consecutive_ducks(38)) # True)
print(consecutive_ducks(25)) # True)
print(consecutive_ducks(32)) # False)
print(consecutive_ducks(65)) # True)
print(consecutive_ducks(13)) # True)
print(consecutive_ducks(16)) # False)
print(consecutive_ducks(99)) # True)
#     # @test.it("Check Medium Values")
#     # def __():
# print(consecutive_ducks(974)) # True)
# print(consecutive_ducks(522)) # True)
# print(consecutive_ducks(755)) # True)
# print(consecutive_ducks(512)) # False)
# print(consecutive_ducks(739)) # True)
# print(consecutive_ducks(1006)) # True)
# print(consecutive_ducks(838)) # True)
# print(consecutive_ducks(1092)) # True)
# print(consecutive_ducks(727)) # True)
# print(consecutive_ducks(648)) # True)
# print(consecutive_ducks(1024)) # False)
# print(consecutive_ducks(851)) # True)
# print(consecutive_ducks(541)) # True)
# print(consecutive_ducks(1011)) # True)
# print(consecutive_ducks(822)) # True)
#     # @test.it("Check Large Values")
#     # def __():
# print(consecutive_ducks(382131)) # True)
# print(consecutive_ducks(118070)) # True)
# print(consecutive_ducks(17209)) # True)
# print(consecutive_ducks(32768)) # False)
# print(consecutive_ducks(161997)) # True)
# print(consecutive_ducks(400779)) # True)
# print(consecutive_ducks(198331)) # True)
# print(consecutive_ducks(325482)) # True)
# print(consecutive_ducks(88441)) # True)
# print(consecutive_ducks(648)) # True)
# print(consecutive_ducks(65536)) # False)
# print(consecutive_ducks(323744)) # True)
# print(consecutive_ducks(183540)) # True)
# print(consecutive_ducks(65271)) # True)
# print(consecutive_ducks(5263987)) # True)