def s(f): return tuple(
    reversed([*map(lambda x:int(x), f.rstrip().split(' '))]))


ret = s(input())
ex_ret = s(input())


def calcDif(s, f):
    if s <= f:
        return 0
    elif s[0:2] == f[0:2]:
        return 15 * (s[2] - f[2])
    elif s[0] == f[0]:
        return 500 * (s[1] - f[1])
    else:
        return 10000


print(calcDif(ret, ex_ret))
