count = int(input())
phoneBook = {}
for _ in range(count):
    name, phone = input().split(' ')
    phoneBook[name] = phone


def check(n):
    return f"{n}={phoneBook[n]}" if n in phoneBook else 'Not found'


for _ in range(count):
    name = input()
    print(check(name))
