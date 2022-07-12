# https://www.codewars.com/kata/561d54055e399e2f62000045/train/python
cache ={}
def find_mult10_SF(n):
    if n in cache:
        return int(cache[n])
    cache[n]=int(16**n * (81**n + 9) // 24)
    return cache[n]


print(find_mult10_SF(1), 60)
print(find_mult10_SF(2), 70080)
print(find_mult10_SF(3), 90700800)
print(find_mult10_SF(11), 721844705097561639669894752501760)

