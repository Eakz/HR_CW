# https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


def isValid(s):
    freq = [s.count(letter) for letter in set(s) ]
    if max(freq)-min(freq) == 0:
        return 'YES'
    elif freq.count(max(freq)) == 1 and max(freq) - min(freq) == 1:
        return 'YES'
    elif freq.count(min(freq)) == 1:
        freq.remove(min(freq))
        if max(freq)-min(freq) == 0:
            return 'YES'
        else:
            return 'NO'
    else:
        return 'NO'
    

print(isValid('aabbcd'),'===','NO')
print(isValid('aabbccddeefghi'),'===','NO')
print(isValid('abcdefghhgfedecba'),'===','YES')