# https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
import unittest


def rot13(message):
    return ''.join(map(lambda x: chr(((ord(x)-(65 if x.isupper() else 97)+13) % 26)+(65 if x.isupper() else 97)) if x.isalpha() else x, message))


print(rot13("test"), "grfg")
print(rot13("Test"), "Grfg")
print(rot13("SWVKJXMV59ARTOL6"), "FJIXWKZI59NEGBY6")
