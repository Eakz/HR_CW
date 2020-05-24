# https://www.codewars.com/kata/5b7dfd8cbfae24e5f200004d/train/python


def read_barcode(barcode):
    txt = barcode.translate(str.maketrans('▍ ', '10'))
    l = (LEFT_HAND[''.join(xs)] for xs in zip(*[iter(txt[3:7*6+3])]*7))
    r = (RIGHT_HAND[''.join(xs)] for xs in zip(*[iter(txt[-7*6-3:-3])]*7))
    return '{} {}{}{}{}{} {}{}{}{}{} {}'.format(*l, *r)


# '0 51000 01251 7')
print(read_barcode('▍ ▍   ▍▍ ▍ ▍▍   ▍  ▍▍  ▍   ▍▍ ▍   ▍▍ ▍   ▍▍ ▍ ▍ ▍ ▍▍▍  ▍ ▍▍  ▍▍ ▍▍ ▍▍  ▍  ▍▍▍ ▍▍  ▍▍ ▍   ▍  ▍ ▍'))
# '0 34000 05200 4')
print(read_barcode('▍ ▍   ▍▍ ▍ ▍▍▍▍ ▍ ▍   ▍▍   ▍▍ ▍   ▍▍ ▍   ▍▍ ▍ ▍ ▍ ▍▍▍  ▍ ▍  ▍▍▍ ▍▍ ▍▍  ▍▍▍  ▍ ▍▍▍  ▍ ▍ ▍▍▍  ▍ ▍'))
# '0 39978 00125 2')
print(read_barcode('▍ ▍   ▍▍ ▍ ▍▍▍▍ ▍   ▍ ▍▍   ▍ ▍▍ ▍▍▍ ▍▍ ▍▍ ▍▍▍ ▍ ▍ ▍▍▍  ▍ ▍▍▍  ▍ ▍▍  ▍▍ ▍▍ ▍▍  ▍  ▍▍▍ ▍▍ ▍▍  ▍ ▍'))
# '0 73138 20410 7')
print(read_barcode('▍ ▍   ▍▍ ▍ ▍▍▍ ▍▍ ▍▍▍▍ ▍  ▍▍  ▍ ▍▍▍▍ ▍ ▍▍ ▍▍▍ ▍ ▍ ▍▍ ▍▍  ▍▍▍  ▍ ▍ ▍▍▍  ▍▍  ▍▍ ▍▍▍  ▍ ▍   ▍  ▍ ▍'))
# '6 30003 91455 6')
print(read_barcode('▍ ▍ ▍ ▍▍▍▍ ▍▍▍▍ ▍   ▍▍ ▍   ▍▍ ▍   ▍▍ ▍ ▍▍▍▍ ▍ ▍ ▍ ▍▍▍ ▍  ▍▍  ▍▍ ▍ ▍▍▍  ▍  ▍▍▍ ▍  ▍▍▍ ▍ ▍    ▍ ▍'))
# '0 76808 00073 3')
print(read_barcode('▍ ▍   ▍▍ ▍ ▍▍▍ ▍▍ ▍ ▍▍▍▍ ▍▍ ▍▍▍   ▍▍ ▍ ▍▍ ▍▍▍ ▍ ▍ ▍▍▍  ▍ ▍▍▍  ▍ ▍▍▍  ▍ ▍   ▍  ▍    ▍ ▍    ▍ ▍ ▍'))
