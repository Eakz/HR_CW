# https://www.hackerrank.com/challenges/30-review-loop/problem
# Enter your code here. Read input from STDIN. Print output to STDOUT
count = int(input())
input_list = [input() for i in range(count)]


def rev(s):
    ev, od = '', ''
    for i in range(len(s)):
        if i % 2 == 0:
            ev += s[i]
        else:
            od += s[i]
    return f"{ev} {od}"


if __name__ == '__main__':
    for s in input_list:
        print(rev(s))
