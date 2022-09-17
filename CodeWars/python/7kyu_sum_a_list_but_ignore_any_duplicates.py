# https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/python

def sum_no_duplicates(l):
    filtered = {}
    for i in l:
        if i in filtered:
            filtered[i]=2
        else:
            filtered[i] = 1
    return sum([k if v==1 else 0 for k,v in filtered.items()])


print(sum_no_duplicates([1, 1, 2, 3]), 5)
print(sum_no_duplicates([1, 1, 2, 2, 3]), 3)
