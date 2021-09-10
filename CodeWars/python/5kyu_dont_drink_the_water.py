# https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/python

def separate_liquids(glass):
    chain = sorted(sum(glass, []), key = 'HWAO'.index)
    return [[chain.pop() for c in ro] for ro in glass]



print(separate_liquids([['H', 'H', 'W', 'O'], ['W', 'W', 'O', 'W'], ['H', 'H', 'O', 'O']]), [
      ['O', 'O', 'O', 'O'], ['W', 'W', 'W', 'W'], ['H', 'H', 'H', 'H']], "")
# print(separate_liquids([['A', 'A', 'O', 'H'], ['A', 'H', 'W', 'O'], ['W', 'W', 'A', 'W'], ['H', 'H', 'O', 'O']]),
#       [['O', 'O', 'O', 'O'], ['A', 'A', 'A', 'A'], ['W', 'W', 'W', 'W'], ['H', 'H', 'H', 'H']], "")
# print(separate_liquids([['A', 'H', 'W', 'O']]), [['O', 'A', 'W', 'H']], "")
# print(separate_liquids([['A'], ['H'], ['W'], ['O']]),
#       [['O'], ['A'], ['W'], ['H']], "")
# print(separate_liquids([]), [], "Empty array should be returned if given.")
