# One man (lets call him Eulampy) has a collection of some
# almost identical Fabergè eggs. One day his friend Tempter
# said to him:

#         Do you see that skyscraper? And can you tell me a
#         maximal floor that if you drop your egg from will
#         not crack it?
#         No, - said Eulampy.
#         But if you give me N eggs, - says Tempter - I'l
#         tell you an answer.
#         Deal - said Eulampy. But I have one requirement
#         before we start this: if I will see more than M
#         falls of egg, my heart will be crushed instead
#         of egg. So you have only M trys to throw eggs.
#         Would you tell me an exact floor with this limitation?

# Task

# Your task is to help Tempter - write a function

# height :: Integer -> Integer -> Integer
# height n m = -- see text

# that takes 2 arguments - the number of eggs n and the number
# of trys m - you should calculate maximum scyscrapper height
# (in floors), in which it is guaranteed to find an exactly maximal
#  floor from which that an egg won't crack it.

# Which means,

#     You can throw an egg from a
#     specific floor every try
#     Every egg has the same, certain durability
#      - if they're thrown from a certain floor or
#       below, they won't crack. Otherwise they crack.
#     You have n eggs and m tries
#     What is the maxmimum height, such that you can
#      always determine which floor the target floor is when
#      the target floor can be any floor between 1 to this maximum
#       height?

# Examples

# height 0 14 = 0
# height 2 0  = 0
# height 2 14 = 105
# height 7 20 = 137979

# Data range

# n <= 20000
# m <= 20000

# # # def height(n, m):
# # #   if n == 0 or m ==0:
# # #     return 0
# # #   return height(n, m - 1) + height(n - 1, m - 1) + 1

# # from functools import lru_cache
# # import sys

# # sys.setrecursionlimit(100000)

# # # @lru_cache(maxsize=1000)
# def height(n, m):
#     if n == 0 or m ==0:
#         return 0
#     return height(n, m - 1) + height(n - 1, m - 1) + 1

# def key(i,j):
#     return "%s-%s" % (i,j)

# def height(n, m):
#     n = n if n < m else m
#     save = {}
#     for j in range(0, m+1):
#         for i in range(0, n+1):
#             if j == 0 or i == 0:
#                 save[key(i,j)] = 0
#                 continue
#             save[key(i,j)] = save[key(i, j-1)] + 1 + save[key(i-1, j-1)]
#     return save[key(n,m)]


def height(n, m):
    h, t = 0, 1
    for i in range(1, n + 1):
        t = t * (m - i + 1) // i
        h += t
    return h