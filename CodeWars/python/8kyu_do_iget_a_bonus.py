# https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/python


def bonus_time(salary, bonus):
    return f"${salary * (bonus and 10 or 1)}"


print(bonus_time(10000, True), '$100000')
print(bonus_time(25000, True), '$250000')
print(bonus_time(10000, False), '$10000')
print(bonus_time(60000, False), '$60000')
print(bonus_time(2, True), '$20')
print(bonus_time(78, False), '$78')
print(bonus_time(67890, True), '$678900')
