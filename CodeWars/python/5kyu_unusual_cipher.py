# https://www.codewars.com/kata/5efdde81543b3b00153e918a/train/python

import re


def wrap(i):
    return 0 if i == 5 else i


def encipher(s, key):
    copy = s
    key = key.upper()
    key = re.sub(r'[^A-Z]', '', key)+'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    keys = ''
    for c in key:
        if c == 'I':
            if 'J' not in keys and c not in keys:
                keys += c
        elif c == 'J':
            if 'I' not in keys and c not in keys:
                keys += c
        else:
            if c not in keys:
                keys += c
    matrix = re.findall(r'.{5}', keys)
    s = re.sub(r'[^A-Z]', '', s.upper())
    s1 = ''
    for i in range(len(s)):
        if i+1 < len(s) and s[i] == s[i+1]:
            s1 += s[i]+'X'
        else:
            s1 += s[i]
    if len(s1) % 2:
        s1 += 'X'
    if 'I' in keys:
        s1 = re.sub(r'J', 'I', s1)
    elif 'J' in keys:
        s1 = re.sub(r'I', 'J', s1)

    pairs = re.findall(r'[A-Z]{2}', s1)
    res_pairs = []
    for [a, b] in pairs:
        row1 = [x for x in matrix if a in x]
        row2 = [x for x in matrix if b in x]
        x1 = matrix.index(row1[0])
        y1 = row1[0].index(a)
        x2 = matrix.index(row2[0])
        y2 = row2[0].index(b)

        if x1 == x2:
            res_pairs.append(matrix[x1][wrap(y1+1)]+matrix[x2][wrap(y2+1)])
        elif y1 == y2:
            res_pairs.append(matrix[wrap(x1+1)][y1]+matrix[wrap(x2+1)][y2])
        else:
            res_pairs.append(matrix[x1][y2]+matrix[x2][y1])
    temp = list(''.join(res_pairs))
    res = ''
    for c in copy:
        if c != ' ':
            res += temp.pop(0)
        else:
            res += c
    res += ''.join(temp)
    return res


plaintexts = ['Jackdaws love my big sphinx of quartz',
              'Pack my box with five dozen liquor jugs',
              'The quick onyx goblin jumps over the lazy dwarf',
              'Cwm fjord bank glyphs vext quiz',
              'How razorback jumping frogs can level six piqued gymnasts',
              'Cozy lummox gives smart squid who asks for job pen']
ciphers = ['EPBNOEZQ ANAD XF KBH QFBRKE QY SVLIUWM',
           'LYBN XF DKG YBPS METD OSVRO PRNWNE RTHQ',
           'ZBX OTRBN QOXG DQCPRK RTIFK QADI UDM AYWF GVLEYM',
           'GUH MEKEC DPON CYFLSZ ADIW NWMT',
           'DSU XFVNEDPBN RTIFRKH YENHQ DLU RDARA KMI YXKVRG HFXOLKZQM',
           'DNWF RLIMES GQETM OMQEF IUKST RGV DSFO NKA SER KDAIQR']

for i, j in zip(plaintexts, ciphers):
    print(
        f"{encipher(i, 'playfair jexample')} should be  - {j}")
