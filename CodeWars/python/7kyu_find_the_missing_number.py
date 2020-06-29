def missing_no(nums):
    return [i for i in range(0,101) if i not in nums]

nums = list(range(0, 101))
nums.remove(5)
print(missing_no(nums))  # 5)

nums = list(reversed(range(0, 101)))
nums.remove(10)
print(missing_no(nums))  # 10)
