# https://www.codewars.com/kata/5b7bae02402fb702ce000159/train/python
# a) Divide x by 3 (if it is divisible by 3), or
# b) Multiply x by 2

def solve(arr):
    final = []
    while(len(arr) > 0):
        if(len(final) == 0):
            cur = arr[0]
            arr = arr[1:]
            final = [cur]
        else:
            cur = final[-1]
        last_to_add = cur*2 if cur*2 in arr else cur/3 if cur/3 in arr else None
        if last_to_add:
            final.append(int(last_to_add))
            arr.remove(last_to_add)
        cur = final[0]
        first_to_add = cur/2 if cur/2 in arr else cur*3 if cur*3 in arr else None
        if first_to_add:
            final.insert(0, int(first_to_add))
            arr.remove(first_to_add)
    return final


print(solve([1, 3]), '===', [3, 1])
print(solve([4, 2]), '===', [2, 4])
print(solve([12, 3, 9, 4, 6, 8]), '===', [9, 3, 6, 12, 4, 8])
print(solve([4, 8, 6, 3, 12, 9]), '===', [9, 3, 6, 12, 4, 8])
print(solve([558, 744, 1488, 279, 2232, 1116]),
      '===', [279, 558, 1116, 2232, 744, 1488])
print(solve([9, 1, 3]), '===', [9, 3, 1])
print(solve([3000, 9000]), '===', [9000, 3000])
print(solve([4, 1, 2]), '===', [1, 2, 4])
print(solve([10, 5]), '===', [5, 10])
