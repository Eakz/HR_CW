# Is the string uppercase?
# Task

# Create a method is_uppercase() to see whether the string
#  is ALL CAPS. For example:

# is_uppercase("c") == False
# is_uppercase("C") == True
# is_uppercase("hello I AM DONALD") == False
# is_uppercase("HELLO I AM DONALD") == True
# is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
# is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True


# In this Kata, a string is said to be in ALL CAPS whenever
#  it does not contain any lowercase letter so any string
#  containing no letters at all is trivially considered to
#  be in ALL CAPS.
# def is_uppercase(inp):
#     return all(map(lambda x: x.isupper() if x.isalpha() else True, inp))

def is_uppercase(inp):
    return inp.isupper()

print(is_uppercase("c"))  # False)
print(is_uppercase("C"))  # True)
print(is_uppercase("hello I AM DONALD"))  # False)
print(is_uppercase("HELLO I AM DONALD"))  # True)
