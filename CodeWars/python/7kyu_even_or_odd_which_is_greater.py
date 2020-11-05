# https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/python

def even_or_odd(s):
    s = [*map(lambda x: float(x), list(s))]
    even = sum(filter(lambda x: x % 2 == 0, s))
    odd = sum(s)-even
    return 'Even and Odd are the same' if even == odd else 'Even is greater than Odd' if even > odd else 'Odd is greater than Even'


print(even_or_odd('12'), ' === ', 'Even is greater than Odd')
print(even_or_odd('123'), ' === ', 'Odd is greater than Even')
print(even_or_odd('112'), ' === ', 'Even and Odd are the same')
