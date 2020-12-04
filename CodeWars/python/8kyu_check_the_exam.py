# https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/python


def check_exam(arr1, arr2):
    return max(sum([4 if arr1[i] == arr2[i] else -1 if len(arr2[i]) == 1 else 0 for i in range(len(arr1))]), 0)


print(check_exam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6)
print(check_exam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7)
print(check_exam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16)
print(check_exam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0)
