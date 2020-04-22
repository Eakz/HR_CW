# def longest_consec(strarr, k):
#     n = len(strarr)
#     # return '' if n == 0 or k > n or k <= 0 else starr[]


b = ["zone", "abigail", "theta",
     "form", "libe", "zas", "theta", "abigail"]


# #Codewars Longest consecutive. Solution.
#
# #simple and readable :)
# # version 1
# def longest_consec(strarr, k):
#     n = len(strarr)
#     maxlen = 0
#     for i in range(len(strarr)):
#         itersum = 0
#         for d in strarr[i:i + k]:
#             itersum += len(d)
#         if itersum > maxlen:
#             maxlen = itersum
#             maxindex = i
#             itersum = 0
#     return '' if n == 0 or k > n or k <= 0 else ''.join(strarr[maxindex:maxindex + k])
#
# print(longest_consec(["zone", "abigail", "theta",
#                       "form", "libe", "zas", "theta", "abigail"], 2))

# Wouldn't call it clever, but somewhat fancier decision
def longest_consec(starr, k):
    n = len(starr)
    nomber = list(map(len, starr))
    indexy = [sum(nomber[i:i + k]) for i in range(len(nomber))]
    return '' if n == 0 or k > n or k <= 0 else ''.join(starr[indexy.index(max(indexy)):indexy.index(max(indexy)) + k])


print(longest_consec(["zone", "abigail", "theta",
                      "form", "libe", "zas", "theta", "abigail"], 2))
