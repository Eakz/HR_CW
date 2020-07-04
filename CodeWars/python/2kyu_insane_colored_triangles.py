# https: // www.codewars.com/kata/5a331ea7ee1aae8f24000175
from math import log


D = dict(RR='R', GB='R', BG='R',
         GG='G', RB='G', BR='G',
         BB='B', RG='B', GR='B')


def triangle(row):
    if len(row) == 1:
        return row
    upscale = 3 ** int(log(len(row) - 1) / log(3))
    left = triangle(row[:len(row) - upscale])
    right = triangle(row[upscale - len(row):])
    return D[left + right]
