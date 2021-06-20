# https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/python

def arrange(s): return [s[[i, -i, ~i, i][i % 4]//2]for i in range(len(s))]
