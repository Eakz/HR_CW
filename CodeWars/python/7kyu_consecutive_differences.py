def differences(lst):
    if len(lst)==1:return lst[0]
    if len(lst)<1:return 0
    return differences([abs(lst[i]-lst[i+1]) for i in range(0,len(lst)-1)])

print(difference([1, 2, 3]), 0)
print(difference([1, 5, 2, 7, 8, 9, 0]), 1)
print(difference([1.5, 2.5, 1]), 0.5)
print(difference([-1, 2, 3]), 2)
print(difference([]), 0)