# https://www.codewars.com/kata/5f25f475420f1b002412bb1f/train/python




def find_the_number_plate(n):
    output = []
    for i, j in enumerate([999*26*26, 999*26, 999]):
        d, n = divmod(n, j)
        output.append(chr(97+d))
    return f"{ ''.join(output[::-1]) }{ n+1 :03}"


CONFIG = [
    # (3, 'aaa004'),
    (1487, 'baa489'),
    #     (40000, 'oba041'),
    #     (17558423, 'zzz999'),
    #     (234567, 'aja802'),
]

for inp, exp in CONFIG:
    print(find_the_number_plate(inp), exp)
