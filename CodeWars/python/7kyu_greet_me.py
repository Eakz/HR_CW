# https://www.codewars.com/kata/535474308bb336c9980006f2


def greet(name='name'):
    return f"Hello {name.lower().title()}!"


print(greet('riley'))  # 'Hello Riley!')
print(greet('molly'))  # "Hello Molly!")
print(greet('BILLY'))  # "Hello Billy!")
