# https://www.codewars.com/kata/5727500a20c7f837fc001869/train/python


def area_polygon(vertex):
    s = 0
    vertex.append(vertex[0])
    while len(vertex) > 1:
        a = vertex[0]
        b = vertex[1]
        s += a[0]*b[1]-a[1]*b[0]
        vertex = vertex[1:]
    return round(abs(s/2), 1)


print(area_polygon([(1, 1), (3, 4), (6, 1)]), 7.5, "Failed")
print(area_polygon([(1, 3), (3, 3), (3, 1), (1, 1)]), 4, "Failed")
print(area_polygon([(0, 5), (3, 3), (2, -3), (-2, -3), (-3, 3)]), 36, "Failed")
