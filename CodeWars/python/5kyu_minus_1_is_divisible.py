# https://www.codewars.com/kata/5f845fcf00f3180023b7af0a/train/python

def how_many_times(a, b):
    b,a=[a,b] if a>b else [b,a]
    if a <= 0: return -1
    if a == b: return a
    ds = b - a
    return sum(1 + (x < ds/x <= a) for x in range(1, min(a, int(ds**0.5))+1) if not ds%x)

print(how_many_times(3, 5), 2, "For numbers 3 and 5 the result should be 2")
print(how_many_times(10, 1), 1, "For numbers 10 and 1 the result should be 1")
print(how_many_times(7, 7), 7, "For numbers 7 and 7 the result should be 7")
print(how_many_times(16, 32), 5, "For numbers 16 and 32 the result should be 5")
print(how_many_times(42, 21), 4, "For numbers 42 and 21 the result should be 4")
print(how_many_times(54, 17), 1, "For numbers 54 and 17 the result should be 1")
print(how_many_times(150080, 150032), 10, "For numbers 150080 and 150032 the result should be 10")