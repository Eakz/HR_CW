# https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/python

def count_squares(cuts, pieces=1):
    if cuts == 0:
        return pieces
    return count_squares(cuts-1, pieces)

sides = [1,8,26,_,98,152]
print(count_squares(5), 152)
print(count_squares(16), 1538)
print(count_squares(23), 3176)
