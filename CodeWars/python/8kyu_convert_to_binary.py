# https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/python

def to_binary(n):
    return int(bin(n)[2:])

print(to_binary(1), 1)
print(to_binary(2), 10)
print(to_binary(3), 11)
print(to_binary(5), 101)