# https://www.codewars.com/kata/5cc80fbe701f0d001136e5eb/train/python

from collections import defaultdict


def stem_and_leaf(data):
    result = defaultdict(list)
    for n in sorted(data):
        stem, leaf = divmod(n, 10)
        result[stem].append(leaf)
    return result
