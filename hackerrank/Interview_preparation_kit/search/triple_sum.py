# https://www.hackerrank.com/challenges/triple-sum/problem
def triplets(a, b, c):
    a_s = sorted(set(map(int, a)))
    b_s = sorted(set(map(int, b)))
    c_s = sorted(set(map(int, c)))
    count = 0

    i = 0
    j = 0

    for y in b_s:
        while i < len(a_s) and a_s[i] <= y:
            i += 1
        while j < len(c_s) and c_s[j] <= y:
            j += 1

        count += i * j

    return count

