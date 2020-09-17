# https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
input()
input_arr = [*map(int, input().split(' '))]


def solution(a):
    min_, max_, result = a[0], a[0], [0, 0]
    a = a[1:]
    for i in a:
        if(i > max_):
            result[0] += 1
            max_ = i
        elif(i < min_):
            result[1] += 1
            min_ = i
    return result


if __name__ == '__main__':
    print(' '.join(map(str, solution(input_arr))))
