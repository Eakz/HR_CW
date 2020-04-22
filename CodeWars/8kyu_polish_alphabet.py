# There are 32 letters in the Polish alphabet:
#  9 vowels and 23 consonants.

# Your task is to change the letters with diacritics:

# ą -> a,
# ć -> c,
# ę -> e,
# ł -> l,
# ń -> n,
# ó -> o,
# ś -> s,
# ź -> z,
# ż -> z

# and print out the string without the use of the Polish letters.

# For example:

# "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
# from string import maketrans
# def correct_polish_letters(string):
#     trans = {
#         'ą': 'a',
#         'ć': 'c',
#         'ę': 'e',
#         'ł': 'l',
#         'ń': 'n',
#         'ó': 'o',
#         'ś': 's',
#         'ż': 'z',
#         'ź': 'z'
#     }
#     return ''.join(trans[i] if i in trans.keys() else i for i in string)


def correct_polish_letters(s):
    return s.translate(str.maketrans("ąćęłńóśźż", "acelnoszz"))


# @test.describe('Example Tests')
# def example_tests():
print(correct_polish_letters("Jędrzej Błądziński"))  # ,"Jedrzej Bladzinski");
print(correct_polish_letters("Lech Wałęsa"))  # ,"Lech Walesa");
print(correct_polish_letters(
    "Maria Skłodowska-Curie"))  # ,"Maria Sklodowska-Curie")
