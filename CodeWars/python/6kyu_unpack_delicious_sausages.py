# https://www.codewars.com/kata/5fa6d9e9454977000fb0c1f8/train/python
import re


def unpack_sausages(truck):
    result = []
    [[result.append(j) for j in i if re.match(
        r"\[(.)\1{3}\]", j)] for i in truck]
    filtered = []
    [[filtered.append(j) for j in result[i].strip('[]')]
     for i in range(len(result)) if (i+1) % 5 != 0]
    return ' '.join(filtered)


# print(unpack_sausages([("(----)", "[IIII]", "_HHH_"), ("IuI", "[))))]",
#                                                        "zz"), ("[@@@@]", "UwU", "[IlII]")]), "I I I I ) ) ) ) @ @ @ @")
print(unpack_sausages([("[IIII]", "[llll]", "[1111]", "[@@@@]",
                        "[||||]", "[║║║║]")]), " == ", "I I I I l l l l 1 1 1 1 @ @ @ @ ║ ║ ║ ║")
# print(unpack_sausages([("[IIII]", "[║║║║]", "[1-11]")]), "I I I I ║ ║ ║ ║")
# print(unpack_sausages([(), (), ("_")]), "")
# print(unpack_sausages([]), "")
