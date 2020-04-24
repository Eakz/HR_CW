# The Rub
#
# You need to make a function that takes an object as an argument, and returns a very similar object but with a special property. The returned object should allow a user to access values by providing only the beginning of the key for the value they want. For example if the given object has a key idNumber, you should be able to access its value on the returned object by using a key idNum or even simply id. Num and Number shouldn't work because we are only looking for matches at the beginning of a key.
#
# Be aware that you could simply add all these partial keys one by one to the object. However, for the sake of avoiding clutter, we don't want to have a JSON with a bunch of nonsensical keys. Thus, in the random tests there will be a test to check that you did not add or remove any keys from the object passed in or the object returned.
#
# Also, if a key is tested that appears as the beginning of more than one key in the original object (e.g. if the original object had a key idNumber and idString and we wanted to test the key id) then return the value corresponding with whichever key comes first alphabetically. (In this case it would be idNumbers value because it comes first alphabetically.)
#
# Example
#
# o = partial_keys({"abcd": 1})
#
# o['abcd'] == 1 # true
# o['abc'] == 1 # true
# o['ab'] == 1 # true
# o['a'] == 1 # true
#
# o['b'] == 1 # false!
# o['b'] == None # true
#
# list(o.keys()) # ['abcd']

# def partial_keys(d):
#     from collections import defaultdict
#     new_obj = defaultdict(dict)
#     for i in d.keys():
#         original_key = i
#         keyword = ''
#         for b in i:
#             keyword += b
#             new_obj[keyword] = d[original_key]
#
#     return new_obj

# class partial_keys:
#
#     def __init__(self,d):
#         self.dict=d
#
#
#     def __getitem__(self,f):
#         for i in sorted(self.dict.keys()):
#             if i.startswith(f):
#                 return self.dict[i]
#         return None
#     def __len__(self):
#         return len(self.dict.keys())
#
#     def __repr__(self):
#         return self.dict.__repr__()
#     @property
#     def keys(self):
#         return self.dict.keys
#     @property
#     def values(self):
#         return self.dict.values
#
#     def get(self,key):
#         return self.__getitem__(key)


def partial_keys(d):
    class DictOverride(dict):
        def __getitem__(self, item):
            it = min((i for i in self if i.startswith(item)), default=None)
            return it if it is None else super().__getitem__(it)

    return DictOverride(d)


o = partial_keys({
    "abcd":
    1,
    'dds':
    2,
    'UPNQPIZLZCCJXMZIOURFGPDKRJRZRLWXBBZHBJRTDFAESRJJEGRNOISELXVLWCTB':
    3
})
print(o)
print(o['ab'])
print(len(o))
print(len(o.keys()))
print(o.keys())
print(o.values())
print(o.get('UP'))

# d={'abds':1,'opp':2,'abb':3}

# print(o['abcd'] == 1)  # true
# print(o['abc'] == 1)  # true
# print(o['ab'] == 1)  # true
# print(o['a'] == 1)  # true
#
# print(o['b'] == 1)  # false!
# print(o['b'] == None)  # true
#
# print(list(o.keys()))  # ['abcd']
