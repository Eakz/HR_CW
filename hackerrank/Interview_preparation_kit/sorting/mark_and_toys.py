# https://www.hackerrank.com/challenges/mark-and-toys/problem


def maximumToys(prices, k):
    count = 0
    total_sum = 0
    prices.sort()
    for i in prices:
        total_sum += i
        if total_sum > k:
            break
        else:
            count += 1
    return count