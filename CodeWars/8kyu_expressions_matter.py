# Task

#     Given three integers a ,b ,c, return the largest number obtained
#      after inserting the following operators and brackets: +, *, ()
#     In other words , try every combination of a,b,c with [*+()] , and
#      return the Maximum Obtained

# Consider an Example :

# With the numbers are 1, 2 and 3 , here are some ways of placing signs
#  and brackets:

#     1 * (2 + 3) = 5
#     1 * 2 * 3 = 6
#     1 + 2 * 3 = 7
#     (1 + 2) * 3 = 9

# So the maximum value that you can obtain is 9.
# Notes

#     The numbers are always positive.
#     The numbers are in the range (1  ≤  a, b, c  ≤  10).
#     You can use the same operation more than once.
#     It's not necessary to place all the signs and brackets.
#     Repetition in numbers may occur .
#     You cannot swap the operands. For instance, in the given example
#      you cannot get expression (1 + 3) * 2 = 8.

# Input >> Output Examples:

# expressionsMatter(1,2,3)  ==>  return 9

# Explanation:

# After placing signs and brackets, the Maximum value obtained from the
#  expression (1+2) * 3 = 9.

# expressionsMatter(1,1,1)  ==>  return 3

# Explanation:

# After placing signs, the Maximum value obtained from the expression is
#  1 + 1 + 1 = 3.

# expressionsMatter(9,1,1)  ==>  return 18

# Explanation:

# After placing signs and brackets, the Maximum value obtained from the
#  expression is 9 * (1+1) = 18.
# Playing with Numbers Series
# Playing With Lists/Arrays Series
# Bizarre Sorting-katas
# For More Enjoyable Katas
# ALL translations are welcomed
# Enjoy Learning !!
# Zizou

# def expression_matter(a, b, c):
#     li=sorted([a,b,c])
#     return a*b*c if li[0]!=1 else (li[0]+li[1])*li[2] if li.count(1)<=2 else a+b+c


def expression_matter(a, b, c):
    return max(a*b*c, a+b+c, (a+b)*c, a*(b+c))


# Test.it("Small values")
print(expression_matter(2, 1, 2))  #  6)
print(expression_matter(2, 1, 1))  #  4)
print(expression_matter(1, 1, 1))  #  3)
print(expression_matter(1, 2, 3))  #  9)
print(expression_matter(1, 3, 1))  #  5)
print(expression_matter(2, 2, 2))  #  8)

# printvalues")
print(expression_matter(5, 1, 3))  #  20)
print(expression_matter(3, 5, 7))  #  105)
print(expression_matter(5, 6, 1))  #  35)
print(expression_matter(1, 6, 1))  #  8)
print(expression_matter(2, 6, 1))  #  14)
print(expression_matter(6, 7, 1))  #  48)

# printalues")
print(expression_matter(2, 10, 3))  #  60)
print(expression_matter(1, 8, 3))  #  27)
print(expression_matter(9, 7, 2))  #  126)
print(expression_matter(1, 1, 10))  #  20)
print(expression_matter(9, 1, 1))  #  18)
print(expression_matter(10, 5, 6))  #  300)
print(expression_matter(1, 10, 1))  #  12)
