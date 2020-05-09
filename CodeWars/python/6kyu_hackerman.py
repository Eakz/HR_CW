# https://www.codewars.com/kata/5bb3a707945bd500450001cb
# def hackermann(m, n, f):
#     if m <= 0:
#         return n + f
#     if m > 0 and n <= 0:
#         return hackermann(m - f, 1, f)
#     if m > 0 and n > 0:
#         return hackermann(m - f, hackermann(m, n - f, f), f)
        
def hackermann(m, n, f):
    s = [m]
    while s:
        m = s.pop()
        if m <= 0:
            n += f
            continue
        s.append(m-f)
        if n <= 0:
            n = 1
            continue
        s.append(m)
        n -= f
    return n

print(hackermann(0, 0, 1))  # 1)
print(hackermann(0, 1, 1))  # 2)
print(hackermann(0, 2, 1))  # 3)
print(hackermann(0, 3, 1))  # 4)
print(hackermann(1, 0, 1))  # 2)
print(hackermann(1, 1, 1))  # 3)
print(hackermann(1, 2, 1))  # 4)
print(hackermann(1, 3, 1))  # 5)
print(hackermann(2, 0, 1))  # 3)
print(hackermann(2, 1, 1))  # 5)
print(hackermann(2, 2, 1))  # 7)
print(hackermann(2, 3, 1))  # 9)
print(hackermann(0, 0, 1.04285832311))  # 2), 1.04)
print(hackermann(0, 1, 1.0715329307))  # 2), 2.07)
print(hackermann(0, 2, 1.01339418663))  # 2), 3.01)
print(hackermann(0, 3, 1.05811288823))  # 2), 4.06)
print(hackermann(1, 0, 0.96911122352))  # 2), 3.91)
print(hackermann(1, 1, 0.951893661909))  # 2), 9.57)
print(hackermann(1, 2, 0.946172096998))  # 2), 12.35)
print(hackermann(1, 3, 1.07176769979))  # 2), 5.29)
print(hackermann(2, 0, 1.03669263529))  # 2), 3.07)
print(hackermann(2, 1, 0.99684607918))  # 2), 117.63)
print(hackermann(2, 2, 1.08084211247))  # 2), 7.49)
print(hackermann(2, 3, 1.01600159546))  # 2), 9.13)
