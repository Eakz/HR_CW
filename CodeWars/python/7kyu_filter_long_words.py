# https://www.codewars.com/kata/5697fb83f41965761f000052/train/python

def filter_long_words(sentence, n):
    return list(filter(lambda x:len(x)>n,sentence.split(' ')))


print(filter_long_words("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps'])
