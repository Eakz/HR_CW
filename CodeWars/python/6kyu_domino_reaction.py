# https://www.codewars.com/kata/584cfac5bd160694640000ae/python

def domino_reaction(s):
    l = len(s.split(' ')[0].split('/')[0])
    return l*'/'+s[l:]


print(domino_reaction("||| ||||//| |/"), "/// ||||//| |/", "Bad reaction")
print(domino_reaction("|||||"), "/////", "Bad reaction")
print(domino_reaction(" ///"), " ///", "Bad reaction")
