# https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/pythonhttps://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/python

def all_non_consecutive(arr):
    return [{'i':i,'n':arr[i]} for i in range(1,len(arr)) if arr[i]-arr[i-1]!=1]

print(all_non_consecutive([1,2,3,4,6,7,8,10]), [{'i': 4, 'n': 6}, {'i': 7, 'n': 10}])