# https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __repr__(self):
        return f"{self.name}-{self.score}"

    def comparator(a, b):
        if(a.score > b.score):
            return -1
        elif(a.score < b.score):
            return 1
        else:
            list=sorted([a.name,b.name])
            if(list[0]==a.name):
                return -1
            else:
                return 1
        # method implementing the Comparator.compare(T o1, T o2)
        #  method. In short, when sorting in ascending order,
        #  a comparator function returns -1 if  a< b, 0 if a==b, and 1 if a>b .


clas = Comparator()
print(clas.compare())
