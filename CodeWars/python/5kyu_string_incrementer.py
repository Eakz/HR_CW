# Your job is to write a function which increments a string,
#  to create a new string.

#     If the string already ends with a number, the number
#     should be incremented by 1.
#     If the string does not end with a number. the number 1
#      should be appended to the new string.

# Examples:

# foo -> foo1

# foobar23 -> foobar24

# foo0042 -> foo0043

# foo9 -> foo10

# foo099 -> foo100

# Attention: If the number has leading zeros the amount
# of digits should be considered.
# print('I can do it!')

# def increment_string(string):
#     for n, i in enumerate(string):
#         if i.isdigit() and all([i.isdigit() for i in string[n:]]):
#             # print('this is map',all(map(lambda x: type(x)==int,string[n:]))
#             word = string[:n]
#             nomber_string = string[n:]
#             len_nombre = len(nomber_string)
#             new_nomber_int = int(nomber_string) + 1
#             zero_nomber = len_nombre - len(list(str(new_nomber_int)))
#             return word + ('0' * zero_nomber
#                            if zero_nomber >= 0 else '') + str(new_nomber_int)
#         elif any([i.isdigit() for i in string[n:]]):
#             continue
#
#     else:
#         return string + '1'


def increment_string(strng):
    head = strng.rstrip('0123456789')
    tail = strng[len(head):]
    if tail == "": return strng + "1"
    return head + str(int(tail) + 1).zfill(len(tail))
    # zfill - fillsup
    # string with 0s leftwise


print(increment_string("foo"))  # "foo1")
print(increment_string("foobar001"))  # "foobar002")
print(increment_string('kjds132kk13'))
# print(increment_string("foobar1"))#, "foobar2")
# print(increment_string("foobar00"))#, "foobar01")
# print(increment_string("foobar99"))#, "foobar100")
# print(increment_string("foobar099"))#, "foobar100")
# print(increment_string(""))#, "1")
# print(increment_string('sklasdfjioweu2'))# sklasdfjioweu2(x))(

print('testing'.zfill(10))
