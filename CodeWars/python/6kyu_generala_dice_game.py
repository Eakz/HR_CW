# https://www.codewars.com/kata/5f70c55c40b1c90032847588/train/python
def points(dice):
    db = {}
    for i in dice:
        if not db.get(i):
            db[i] = 1
        else:
            db[i] += 1
    vals = db.values()
    if 5 in vals:
        return 50
    elif 4 in vals:
        return 40
    elif 3 in vals and 2 in vals:
        return 30
    options = [1, 2, 3, 4, 5], [1, 3, 4, 5, 6], [2, 3, 4, 5, 6]
    return 20 if any([all([True if str(j) in db.keys() else False for j in i]) for i in options]) else 0


print(points("55555"), ' === ', 50)
print(points("66666"), ' === ', 50)
print(points("11111"), ' === ', 50)
print(points("22222"), ' === ', 50)
print(points("33333"), ' === ', 50)
print(points("44444"), ' === ', 50)
print(points("44441"), ' === ', 40)
print(points("33233"), ' === ', 40)
print(points("22262"), ' === ', 40)
print(points("12121"), ' === ', 30)
print(points("44455"), ' === ', 30)
print(points("66116"), ' === ', 30)
print(points("12345"), ' === ', 20)
print(points("23456"), ' === ', 20)
print(points("34561"), ' === ', 20)
print(points("13564"), ' === ', 20)
print(points("62534"), ' === ', 20)
print(points("44421"), ' === ', 0)
print(points("61623"), ' === ', 0)
print(points("12346"), ' === ', 0)
