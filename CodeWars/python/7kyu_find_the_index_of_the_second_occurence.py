# https://www.codewars.com/kata/63f96036b15a210058300ca9/train/python

def second_symbol(s, symbol):
    count = 0;
    for i,l in enumerate(s):
        if l==symbol:
            if count==1:
                return i
            count+=1
          
    return -1

# def second_symbol(s: str, symbol: str) -> int:
#     try: return s.find(symbol, s.index(symbol) + 1)
#     except ValueError: return -1

print(second_symbol('Hello world!!!','l'), 3, 'Find the index of the second symbol "l" in the string')
print(second_symbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string')
print(second_symbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string')
print(second_symbol('', 'q'), -1, 'The symbol "q" is not in the string')
print(second_symbol('Hello', '!'), -1, 'The symbol "!" is not in the string')
print(second_symbol('uJpKQFGPyNmrkIohJPIHuypiaDkttjKJdmPqMdFl', 'h'))