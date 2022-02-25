# https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/python

def calculator(txt: str):
    [val1, op, val2] = txt.split(' ')
    return "."*eval(f"{len(val1)}{op}{len(val2)}")


# Lambda version
calculator=lambda _:'.'*eval(__import__('re').sub('\.+',lambda c:str(len(c[0])),_))

print(calculator("..... + ..............."),  "....................")
print(calculator("..... - ..."),  "..")
print(calculator("..... - ."),  "....")
print(calculator("..... * ..."),  "...............")
print(calculator("..... * .."),  "..........")
print(calculator("..... // .."),  "..")
print(calculator("..... // ."), ".....")
