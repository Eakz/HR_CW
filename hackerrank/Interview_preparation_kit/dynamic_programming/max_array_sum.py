# https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

def maxSubsetSum(arr):
    dp = list()
    dp.append(arr[0])
    dp.append(max(arr[:2]))
    ans = dp[-1]
    for i in arr[2:]:
        dp.append(max(i, dp[-2] + i, ans))
        ans = max(ans, dp[-1])
    return ans
    