# https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/python

def warn_the_sheep(q):
    q=[*reversed(q)]
    wolf=q.index('wolf')
    return f"Oi! Sheep number {wolf}! You are about to be eaten by a wolf!" if wolf!=0 else 'Pls go away and stop eating my sheep'

print(warn_the_sheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']), 'Oi! Sheep number 2! You are about to be eaten by a wolf!')
print(warn_the_sheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 5! You are about to be eaten by a wolf!')
print(warn_the_sheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 6! You are about to be eaten by a wolf!')
print(warn_the_sheep(['sheep', 'wolf', 'sheep']), 'Oi! Sheep number 1! You are about to be eaten by a wolf!')
print(warn_the_sheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep')
print(warn_the_sheep(['sheep', 'sheep', 'wolf','sheep']))