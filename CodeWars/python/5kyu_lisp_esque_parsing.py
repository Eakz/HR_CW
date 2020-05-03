'''
https://www.codewars.com/kata/5ea1de08a140dc0025b10d82
'''

func_table = {
    'sum': lambda a, b: a + b,
    'mul': lambda a, b: a * b,
    'div': lambda a, b: a / b,
    'pow': lambda a, b: a**b,
    'neg': lambda a: -a,
    'sqr': lambda a: a * a
}

import re

# def parse(code: str, function_table: dict):
#     if re.match(r"\(?-?\s?[0-9]+\)?", code):
#         return int(code.strip('()').replace(' ', ''))
#     match = re.search(
#         r"\({1}([a-z]{3}|[+,-,\/,*,^2,^]){1,2}\s?[0-9]?\s?[0-9]?\){1}", code)
#     match_list = match.group().strip('()').split()
#     func = func_table[match_list[0]]
#     nom1 = int(match_list[1])
#     if len(match_list) <= 2:
#         new_str = code.replace(match.group(), str(int(func(nom1))))
#     else:
#         nom2 = int(match_list[2])
#         new_str = code.replace(match.group(), str(int(func(nom1, nom2))))
#     return parse(new_str, func_table)
# works
parse = lambda c, f: eval(sub(*' ,', subf('(\L<f>) ', "f['{1}'])(", c, f=f)))
# test

print(parse("3", func_table))  # 3)
print(parse("(neg 3)", func_table))  # -3)
print(parse("(sum 1 2)", func_table))  # 3)
print(parse("(sum (mul 2 4) 2)", func_table))  # 10)
print(parse("(sum (div 4 2) 2)", func_table))  # 4)
print(parse("(sum (mul 2 4) (sqr 2))", func_table))  # 12)
print(parse("(sum (mul (sum 1 1) 4) (sqr 2))", func_table))  # func_table, 12)
print(parse("(pow (mul 2 4) 3)", func_table))  # 512
print(parse("3", func_table))  #, 3)
print(parse("(- 3)", func_table))  #, -3)
func_table = {
    '+': lambda a, b: a + b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a / b,
    '^': lambda a, b: a**b,
    '-': lambda a: -a,
    '^2': lambda a: a * a
}
print(parse("(+ 1 2)", func_table))  #, 3)
print(parse("(+ (* 2 4) 2)", func_table))  #, 10)
print(parse("(+ (/ 4 2) 2)", func_table))  #, 4)
print(parse("(+ (* 2 4) (^2 2))", func_table))  #, 12)
print(parse("(+ (* (+ 1 1) 4) (^2 2))", func_table))  # 12)
print(parse("(^ (* 2 4) 3)", func_table))  #, 512)
