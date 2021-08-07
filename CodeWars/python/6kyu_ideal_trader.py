# https://www.codewars.com/kata/610ab162bd1be70025d72261/train/python

def ideal_trader(prices):
    k = 1
    for i,x in enumerate(prices[:-1]):
        y = prices[i+1]
        k*= max(x/y, y/x)
    return k