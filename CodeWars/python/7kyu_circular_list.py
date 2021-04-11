# https://www.codewars.com/kata/5b2e60742ae7543f9d00005d/train/python

class CircularList():
    def __init__(self, *args):
        assert args
        self.a = args
        self.c = None
        
    def next(self):
        if not self.c: self.c = self.a[0]
        else: self.c = self.a[(self.a.index(self.c)+1)%len(self.a)]
        return self.c
    
    def prev(self):
        if not self.c: self.c = self.a[-1]
        else: self.c = self.a[(self.a.index(self.c)-1)%len(self.a)]
        return self.c
        
l = CircularList("one", "two", "three")
print(l.next(), "one")
print(l.next(), "two")
print(l.next(), "three")
print(l.next(), "one")
print(l.prev(), "three")
print(l.prev(), "two")
print(l.prev(), "one")
print(l.prev(), "three")

l = CircularList(1, 2, 3, 4, 5)
print(l.prev(), 5)
print(l.prev(), 4)
print(l.next(), 5)
print(l.next(), 1)
print(l.prev(), 5)
print(l.prev(), 4)
print(l.prev(), 3)
print(l.prev(), 2)