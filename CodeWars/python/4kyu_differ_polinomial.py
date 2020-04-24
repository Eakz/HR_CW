# Create a function that differentiates a polynomial
#  for a given value of x.
#
# Your function will receive 2 arguments: a polynomial
#  as a string, and a point to evaluate the equation as an integer.
# Assumptions:
#
#     There will be a coefficient near each x, unless
#      the coefficient equals 1 or -1.
#     There will be an exponent near each x, unless the
#      exponent equals 0 or 1.
#     All exponents will be greater or equal to zero
#
# Examples:
#
# differenatiate("12x+2", 3)      ==>   returns 12
# differenatiate("x^2+3x+2", 3)   ==>   returns 9


# from collections import defaultdict
# import re
#
# P = re.compile(r'\+?(-?\d*)(x\^?)?(\d*)')
#
# def differentiate(eq, x):
#
#     derivate = defaultdict(int)
#     for coef,var,exp in P.findall(eq):
#         exp  = int(exp or var and '1' or '0')
#         coef = int(coef!='-' and coef or coef and '-1' or '1')
#
#         if exp: derivate[exp-1] += exp * coef
#
#     return sum(coef * x**exp for exp,coef in derivate.items())


def parse_monom(monom):
    if 'x' not in monom:
        monom = monom + 'x^0'
    if monom.startswith('x'):
        monom = '1' + monom
    if monom.startswith('-x'):
        monom = '-1' + monom[1:]
    if monom.endswith('x'):
        monom = monom + '^1'
    coefficient, degree = map(int, monom.replace('x', '').split('^'))
    print('degree',degree)
    print('coefficient',coefficient)
    return degree, coefficient


def differentiate(equation, point):
    monoms = equation.replace('-', '+-').lstrip('+').split('+')
    print('monoms',monoms)
    polynom = dict(map(parse_monom, monoms))
    print('polynoms',polynom)
    print(list(coefficient * degree * point ** (degree - 1)
               for degree, coefficient in polynom.items() if degree))
    return sum(coefficient * degree * point ** (degree - 1)
               for degree, coefficient in polynom.items() if degree)

# print(differentiate("12x+2", 3))
print(differentiate("-5x^2+10x+4", 3))
