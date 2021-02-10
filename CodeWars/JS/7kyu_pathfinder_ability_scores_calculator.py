# https://www.codewars.com/kata/5df0041acec189002d06101f/train/python

def pathfinder_scores(scores):
    d = {
        7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2, 13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17}
    return sum(map(lambda x:d[x] if x>6 and x<19 else 100,scores))<=25


print(pathfinder_scores([18, 13, 7, 12, 15, 10]), True)
print(pathfinder_scores([13, 12, 14, 12, 15, 11]), True)
print(pathfinder_scores([6, 19, 10, 10, 10, 10]), False)
