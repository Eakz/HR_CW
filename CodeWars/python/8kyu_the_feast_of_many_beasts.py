# https://www.codewars.com/kata/5aa736a455f906981800360d/train/python


def feast(beast: str, dish: str) -> bool:
    return beast[0]+beast[-1] == dish[0]+dish[-1]


print(feast("great blue heron", "garlic naan"), True)
print(feast("chickadee", "chocolate cake"), True)
print(feast("brown bear", "bear claw"), False)
