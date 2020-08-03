# https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/
#Option 1
def capitalize_word(word):
    return word.title()
#Option2
capitalize_word=lambda x:x.title()
#Option 3
capitalize_word=str.capitalize
# Test cases

print(capitalize_word('word'), 'Word')
print(capitalize_word('i'), 'I')
print(capitalize_word('glasswear'), 'Glasswear')
