# In this kata, you will write a function
# that returns the positions and the values of
# the "peaks" (or local maxima) of a numeric array.
#
# For example, the array arr = [0, 1, 2, 5, 1, 0] has \
# a peak at position 3 with a value of 5 (since arr[3] equals 5).
#
# The output will be returned as an object with
# two properties: pos and peaks. Both of these properties
# should be arrays. If there is no peak in the given array,
# then the output should be {pos: [], peaks: []}.
#
# Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
# should return {pos: [3, 7], peaks: [6, 3]} (or equivalent
# in other languages)
#
# All input arrays will be valid integer arrays (although it
# could still be empty), so you won't need to validate the input.
#
# The first and last elements of the array will not be considered
# as peaks (in the context of a mathematical function, we don't
# know what is after and before and therefore, we don't know if
# it is a peak or not).
#
# Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while
# [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only
# return the position and value of the beginning of the plateau.
# For example: pickPeaks([1, 2, 2, 2, 1])
# returns {pos: [1], peaks: [2]} (or equivalent in other languages)
#
# Have fun!
#
# def pick_peaks(arr):
#     peak_list=[]
#     peak=0
#     pos=0
#     for a,i in enumerate(arr):
#         if i>peak:
#             peak=i
#         elif i<peak:
#             if a!=1 and not pos:
#                 peak_list.append([peak,a-1])
#                 peak=0
#             elif pos:
#                 peak_list.append([peak,pos])
#                 peak=0
#                 pos=0
#         elif i==peak:
#             if not pos and i==arr[a-1] and i>arr[a-2]:
#                 pos=a-1
#     return {"pos":[i[1] for i in peak_list], "peaks":[i[0] for i in peak_list]}
# def pick_peaks(arr):
#     peak=0
#     bot=0
#     pos=0
#     peak_list=[]
#     equalis=0
#     for n,i in enumerate(arr):
#         if i>equalis:
#             pos=0
#         if i>peak:
#             peak=i
#             if n!=1:
#                 if i>arr[n-2]:
#                     bot=arr[n-2]
#         elif i<peak:
#             if n!=1 and not pos and bot:
#                 peak_list.append([peak,n-1])
#                 peak=0
#                 bot=0
#             elif pos:
#                 print('peak and pos',peak,pos)
#                 peak_list.append([peak,pos])
#                 peak=0
#                 pos=0
#         elif i==peak:
#             if not pos and i==arr[n-1] and i>arr[n-2]:
#                 pos=n-1
#                 equalis=i
#                 print('pos and equalis',pos,equalis)
#         elif i>equalis:
#             equalis=0
#             print('equalis zero')
#     return {"pos":[i[1] for i in peak_list], "peaks":[i[0] for i in peak_list]}


def pick_peaks(arr):
    peak_list=[]
    if len(arr)>2:
        for i in range(1,len(arr)-1):
            if arr[i-1]<arr[i]>arr[i+1]:
                peak_list.append([i,arr[i]])
            elif arr[i-1]<arr[i]and arr[i]==arr[i+1]:
                for b in range(i,len(arr)):
                    if arr[b]<arr[i]:
                        peak_list.append([i,arr[i]])
                        break
                    elif arr[b]>arr[i]:
                        break
    return {"pos":[i[0] for i in peak_list], "peaks":[i[1] for i in peak_list]}


# print(pick_peaks([1,2,3,6,4,1,2,3,2,1]))# {"pos":[3,7], "peaks":[6,3]})
# print(pick_peaks([3,2,3,6,4,1,2,3,2,1,2,3]))# {"pos":[3,7], "peaks":[6,3]})
# print(pick_peaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))# {"pos":[3,7,10], "peaks":[6,3,2]})
# print(pick_peaks([2,1,3,1,2,2,2,2,1]))# {"pos":[2,4], "peaks":[3,2]})
# print(pick_peaks([2,1,3,1,2,2,2,2]))# {"pos":[2], "peaks":[3]})
# print(pick_peaks([2,1,3,2,2,2,2,5,6]))# {"pos":[2], "peaks":[3]})
# print(pick_peaks([2,1,3,2,2,2,2,1]))# {"pos":[2], "peaks":[3]})
print(pick_peaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))# {"pos":[2,7,14,20], "peaks":[5,6,5,5]})
# print(pick_peaks([]))#{"pos":[],"peaks":[]})
# print(pick_peaks([1,1,1,1]))#{"pos":[],"peaks":[]})