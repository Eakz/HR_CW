# https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/python

def same_case(a, b): 
    return int(a.isupper()==b.isupper()) if a.isalpha() and b.isalpha() else -1


print(same_case('C', 'B'), 1)
print(same_case('b', 'a'), 1)
print(same_case('d', 'd'), 1)
print(same_case('A', 's'), 0)
print(same_case('c', 'B'), 0)
print(same_case('b', 'Z'), 0)
print(same_case('\t', 'Z'), -1)
print(same_case('H', ':'), -1)