def positive_to_negative(binary):
    return [int(j) for j in bin(int(''.join([('1' if i == 0 else '0') for i in binary]), 2)+1)[2:][-len(binary):]]


print(positive_to_negative([0, 0, 0, 0]))  # [0, 0, 0, 0])
print(positive_to_negative([0, 0, 1, 0]))  # [1, 1, 1, 0])
print(positive_to_negative([0, 0, 1, 1]))  # [1, 1, 0, 1])
print(positive_to_negative([0, 1, 0, 0]))  # [1, 1, 0, 0])
