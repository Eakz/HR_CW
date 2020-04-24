# A cyclops number is a number in binary that is made up of all 1's,
#  with one 0 in the exact middle. That means all cyclops numbers must
#   have an odd number of digits for there to be an exact middle.
# A couple examples:
# 101
# 11111111011111111
# You must take an input, n, that will be in decimal format (base 10),
#  then return True if that number wil be a cyclops number when converted
#   to binary, or False if it won't.
# Assume n will be a positive integer.

# A test cases with the process shown:

# cyclops (5)
# """5 in biinary"""
# "0b101"
# """because 101 is made up of all "1"s with a "0" in the middle,
#  101 is a cyclops number"""
# return True

# cyclops(13)
# """13 in binary"""
# "0b1101"
# """because 1101 has an even number of bits, it cannot be a cyclops"""
# return False

# cyclops(17)
# """17 in binary"""
# "0b10001"
# """Because 10001 has more than 1 "0" it cannot be a cyclops number"""
# return False


def cyclops(n):
    bin_str_list = str(bin(n)).strip('0b').split('0')
    print(bin_str_list)
    if len(bin_str_list) == 2:
        if bin_str_list[0] == bin_str_list[1]:
            return True
    return False


# CodeWars solution
# def cyclops(n):
#     n = bin(n)[2:]

#     return n.count("0") == 1 and n == n[::-1]

print(cyclops(17))
