# Sum of Pairs
#
# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
#
# sum_pairs([11, 3, 7, 5],         10)
# #              ^--^      3 + 7 = 10
# == [3, 7]
#
# sum_pairs([4, 3, 2, 3, 4],         6)
# #          ^-----^         4 + 2 = 6, indices: 0, 2 *
# #             ^-----^      3 + 3 = 6, indices: 1, 3
# #                ^-----^   2 + 4 = 6, indices: 2, 4
# #  * entire pair is earlier, and therefore is the correct answer
# == [4, 2]
#
# sum_pairs([0, 0, -2, 3], 2)
# #  there are no pairs of values that can be added to produce 2.
# == None/nil/undefined (Based on the language)
#
# sum_pairs([10, 5, 2, 3, 7, 5],         10)
# #              ^-----------^   5 + 5 = 10, indices: 1, 5
# #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# #  * entire pair is earlier, and therefore is the correct answer
# == [3, 7]
#
# Negative numbers and duplicate numbers can and will appear.
#
# NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

# def sum_pairs(ints, s):
#     for i in range(len(ints)):
#         for b in range(len(ints)):
#             if ints[i] + ints[b] ==s and i!=b:
#                 slice=ints[i:b+1]
#                 print('slice is',slice,' - ',s)
#                 return sorted([[i,b,n,n1] for n,i in enumerate(slice) for n1,b in enumerate(slice) if i+b==s and n!=n1],key=lambda x: abs((x[2]-1)-(x[3]-1)))[0][:2]

# def sum_pairs(ints,s):
#     for i in set(ints):
#         for b in set(ints):
#             if i+b ==s:
#                 for ind in range(ints.index(i),len(ints)):
#                     for ind2 in range(ints.index(i),len(ints)):
#                         if ints[ind]+ints[ind2]==s and ind!=ind2:
#                             return [ints[ind],ints[ind2]]
def sum_pairs(ints,s):
    result=[]
    for i in set(ints):
        for b in set(ints):
            if i+b==s:
                result+=[i,b] if i!=b else [i,b] if ints.count(i)!=1 else []
    indexes=[ints.index(i) for i in set(result)]
    if len(indexes)>1:
        start=min(indexes)
        end=max(indexes)
        slice=ints[start:end+1]
    elif len(indexes)==1:
        start=min(indexes)
        slice=ints[start:]
    else:
        return None
    return sorted([[i,b,n,n1] for n,i in enumerate(slice) for n1,b in enumerate(slice) if i+b==s and n!=n1],key=lambda x: abs((x[2]-1)-(x[3]-1)))[0][:2]



l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]

def sum_pairs(lst, s):
    cache = set()
    for i in lst:
        if s - i in cache:
            return [s - i, i]
        cache.add(i)

print(sum_pairs(l1, 8))
# # print(' == [1, 7],)# "Basic: %s should return [1, 7] for sum = 8" % l1')
print(sum_pairs(l2, -6))
# # print(' == [0, -6], "Negatives: %s should return [0, -6] for sum = -6" % l2')
print(sum_pairs(l3, -7))
# print(' == None, "No Match: %s should return None for sum = -7" % l3')
print(sum_pairs(l4, 2))
# print(' == [1, 1], "First Match From Left: %s should return [1, 1] for sum = 2 " % l4')
print(sum_pairs(l5, 10))
# print(' == [3, 7], "First Match From Left REDUX!: %s should return [3, 7] for sum = 10 " % l5')
print(sum_pairs(l6, 8))
# print(' == [4, 4], "Duplicates: %s should return [4, 4] for sum = 8" % l6')
print(sum_pairs(l7, 0))
# print(' == [0, 0], "Zeroes: %s should return [0, 0] for sum = 0" % l7')
print(sum_pairs(l8, 10))
# print(' == [13, -3], "Subtraction: %s should return [13, -3] for sum =print')