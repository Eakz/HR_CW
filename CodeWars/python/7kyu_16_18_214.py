# https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/python
def add(a, b):
    s = ""
    while a+b:
        a, p = divmod(a, 10)
        b, q = divmod(b, 10)
        s = str(p+q)+s
    return int(s or '0')


print(add(2, 11), 13)
print(add(0, 1), 1)
print(add(0, 0), 0)
print(add(16, 18), 214)
print(add(26, 39), 515)
print(add(122, 81), 1103)
