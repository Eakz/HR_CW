# https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/python

def nth_char(words):
    return "".join([words[i][i] for i in range(len(words))])



print(nth_char(['yoda', 'best', 'has']), 'yes')
print(nth_char([]),'')
print(nth_char(['X-ray']),'X')
print(nth_char(['No','No']),'No')
print(nth_char(['Chad','Morocco','India','Algeria','Botswana','Bahamas','Ecuador','Micronesia']),'Codewars')