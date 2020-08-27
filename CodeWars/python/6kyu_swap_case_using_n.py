# https://www.codewars.com/kata/5f3afc40b24f090028233490/train/python
# Totally forgot about swapcase() string method...sorry
def swap(s, n):
    pattern = bin(n)[2:]
    pivot = 0
    answer = ''
    for i in s:
        if (i.isalpha()):
            if pattern[pivot] == '1':
                if i == i.upper():
                    answer += i.lower()
                elif i == i.lower():
                    answer += i.upper()
            else:
                answer += i
            pivot = (pivot+1) % len(pattern)
        else:
            answer += i

    return answer


print(swap('the quick broWn fox leapt over the fence', 9), '\n ==== \n',
      'The QUicK BrowN foX LeaPT ovER thE FenCE')
print(swap('eVerybody likes ice cReam', 85),
      '\n ==== \n', 'EVErYbODy LiKeS IcE creAM')
print(swap('gOOd MOrniNg', 7864), '\n ==== \n', 'GooD MorNIng')
print(swap('how are you today?', 12345), '\n ==== \n', 'HOw are yoU TOdaY?')
print(swap('the lord of the rings', 0), '\n ==== \n', 'the lord of the rings')
print(swap('', 11345), '\n ==== \n', '')
