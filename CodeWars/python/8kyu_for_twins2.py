# https://www.codewars.com/kata/59c287b16bddd291c700009a/train/python


def ice_brick_volume(radius, bottle_length, rim_length):
    return (bottle_length - rim_length) * 2 * radius ** 2 

print(ice_brick_volume(1, 10, 2), 16)
print(ice_brick_volume(5, 30, 7), 1150)