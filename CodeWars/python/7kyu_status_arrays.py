# https://www.codewars.com/kata/601c18c1d92283000ec86f2b/train/python

def status(nums):
    cnts = {n:len(nums)-i for i,n in enumerate(sorted(nums, reverse=True),1)}
    itemStatus = lambda it: it[0] + cnts[it[1]]
    return [v for _,v in sorted(enumerate(nums), key=itemStatus)]
    
print(status([6,9,3,8,2,3,1]),[6,3,2,1,9,3,8])
print(status([5 ,5 ,5 ,8 ,7 ,-2 ,-2 ,-3 ,1 ,9, 8 ,3 ,-3, 4 ,-4 ,6 ]),[5, -2, -3, 5, -2, 5, 1, -3, -4, 8, 7, 3, 4, 8, 9, 6])
print(status([14,-3,4,6,9,10,-2,4,0]), [-3,4,-2,14,6,9,4,0,10])