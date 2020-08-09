# https://www.codewars.com/kata/5be085e418bcfd260b000028/train/python

# def num_key_strokes(text):
#     keystrokes = 0
#     for i in range(len(text)):
#         if (text[i].isalpha() and text[i].isupper()) or (not text[i].isalpha() and not text[i].isdigit() and not text[i].isspace() and (text[i] != ',' and text[i] != '.' and text[i] !='-')):
#             keystrokes += 2
#         else:
#             keystrokes += 1
#     return keystrokes

def num_key_strokes(t):
    keystrokes = 0
    single_value = ['.', ',', '`', '\'', ';',
                    '-', '=', '/', '[', ']', '\\',' ']
    for i in range(len(t)):
        if(t[i].islower() or t[i].isdigit() or (t[i] in single_value)):
            keystrokes += 1
        else:
            keystrokes += 2
    return keystrokes


# Use test.describe (or Test.describe) to describe your test suite
print(
    "Key Strokes - Counting how many keystrokes it takes to type a string.\n\n")

# Use "it" calls to describe the specific test case

test_one = "Hello, world!"
test_two = "0297350298-02-30856-174346"
test_three = "This is a long SEnteNce.1"

# assert equals will pass if both items equal each other (using ==). If
# the test fails, assert_equals will output a descriptive message indicating
# what the values were expected to be.
print(num_key_strokes(test_one), " - Should be - ", 15)
print(num_key_strokes(test_two), " - Should be - ", 26)
print(num_key_strokes(test_three), " - Should be - ", 29)
