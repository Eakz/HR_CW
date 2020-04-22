def tribonacci(signature, n):
    result = []
    a, b, c = signature
    for _ in range(n // 3 + 1):
        result.extend([a, b, c])
        a = a + b + c
        b = a + b + c
        c = a + b + c
    return result[:n]


def tribonacci(signature, n):
    res = signature[:n]
    for i in range(n - 3):
        res.append(sum(res[-3:]))
    return res


print(tribonacci([3, 2, 1], 10))

b = [1, 2, 3]
print(b[:10])
