# https://www.hackerrank.com/challenges/electronics-shop/problem

def getMoneySpent(keyboards, drives, b):
    variations = sorted([i+s for i in keyboards for s in drives if i+s <= b])
    return -1 if not variations else variations[-1]
