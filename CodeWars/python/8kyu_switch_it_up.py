# https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/python

def switch_it_up(number):
    b = ['Zero',
         "One",
         "Two",
         "Three",
         "Four",
         "Five",
         "Six",
         "Seven",
         "Eight",
         "Nine"
         ]
    return b[number]


print(switch_it_up(0), "Zero")
print(switch_it_up(9), "Nine")
