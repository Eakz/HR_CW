# https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d/train/python

# 1) addition
# 2) subtraction
# 3) multiplication
# 4) division

def say_me_operations(s):
    ops = {'+': 'addition', '-': 'subtraction',
           '*': 'multiplication', '//': 'division'}
    array = [*map(lambda x:int(x), s.split(' '))]
    return ', '.join([[ops[j] for j in ops.keys() if eval(f"{array[i]}{'0' if array[i+1]==0 and j=='//' else j}{array[i+1]}") == array[i+2]][0] for i in range(0, len(array)-2)])


# print(say_me_operations("1 2 3 5 8"), "addition, addition, addition")
# print(say_me_operations("9 4 5 20 25"),
#       "subtraction, multiplication, addition")
# print(say_me_operations("10 2 5 -3 -15 12"),
#       "division, subtraction, multiplication, subtraction")
# print(say_me_operations("2 2 4"), "addition")
print(say_me_operations(
    "7 7 0 7 7 1 8 8 64 0 64 64 1 64 64 128 8192 -8064 -2 4032 -1 4031"), "addition")
