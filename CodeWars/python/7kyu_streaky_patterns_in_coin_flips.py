# https://www.codewars.com/kata/5c1ac4f002c59c725900003f/train/python

def check_sequence(sequence, l, n):
    Hs=list(map(lambda x:len(x),sequence.split('T')))
    Ts=list(map(lambda x:len(x),sequence.split('H')))
    return (Hs.count(l)+Ts.count(l))==n

print(check_sequence('HTHHHHTHTT', 4, 1), True)
print(check_sequence('HTHTTTHTTT', 3, 2), True)
print(check_sequence('TTHHHHH', 6, 1), False)
print(check_sequence('HTHHTT', 2, 1), False)
print(check_sequence('HTHTT', 2, 1), True)
print(check_sequence('TTHHTTTT', 2, 1), False)
print(check_sequence('HTHHHHHHHTTHHTHHTHTTHH', 2, 5), True)
print(check_sequence('TTTT', 2, 2), False)