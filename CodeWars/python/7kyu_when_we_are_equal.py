# https://www.codewars.com/kata/60c47b07f24d000019f722a2/train/python

def make_identical(strng):
    return eval(f"'{strng}'")
    
print("abc" is make_identical("abcd"[:-1]))
