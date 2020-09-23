#!/bin/python3

import sys
def prod(l):
    res=1
    for i in l:
        res*=i
    return res        

def solution(a):
    maxs = 0
    for i in range(20):
        for j in range(20):
            #straight right
            if(j<17):
                right=a[i][j:j+4]
                if(i<17):
                    rdiagonal = [a[i+n][j+n] for n in range(4)]
            else:
                right=[]
                rdiagonal=[]
            if(i<17):
                down = [o[j] for o in a[i:i+4]]
            if(j>3 and i<17):
                ldiagonal=[a[i+n][j-n] for n in range(4)]
            else:
                ldiagonal=[]
            maxs=max([maxs,prod(right),prod(down),prod(rdiagonal),prod(ldiagonal)])
    return maxs
    
grid = []
for grid_i in range(20):
    grid_t = [int(grid_temp) for grid_temp in input().strip().split(' ')]
    grid.append(grid_t)

print(solution(grid))
