# https://www.codewars.com/kata/59a2af923203e8220b00008f/train/python
import timeit
# this is not fast enough!


def digit_sum_opt1(n):
    sum = 0
    while n > 9:
        sum += n % 10
        n //= 10
    return sum + n

# this is even worse


def digit_sum_opt2(n):
    return n if n < 9 else n % 10 + digit_sum(n//10)


def digit_sum(n):
    sum=0;
    for num in list(str(n)):
        sum+=int(num)
    return sum;


def checkMe():
    print(digit_sum(0), 0)
    print(digit_sum(12345), 15)
    print(digit_sum(999), 27)
    print(digit_sum(4294967295), 57)
    print(digit_sum(2**200), 256)


def timeMeOpt1():
    digit_sum_opt1(0)
    digit_sum_opt1(12345)
    digit_sum_opt1(999)
    digit_sum_opt1(4294967295)
    digit_sum_opt1(2**200)


def timeMeOpt2():
    digit_sum_opt2(0)
    digit_sum_opt2(12345)
    digit_sum_opt2(999)
    digit_sum_opt2(4294967295)
    digit_sum_opt2(2**200)


def timeMeYourFunc():
    digit_sum(0)
    digit_sum(12345)
    digit_sum(999)
    digit_sum(4294967295)
    digit_sum(2**200)


# checkMe()
print(timeit.timeit("timeMeOpt1()", globals=globals(), number=10000)*100, ' - opt1')
print(timeit.timeit("timeMeOpt2()", globals=globals(), number=10000)*100, ' - opt2')
print(timeit.timeit("timeMeYourFunc()", globals=globals(), number=10000)*100, ' - func')
