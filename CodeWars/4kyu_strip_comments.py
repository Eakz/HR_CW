# Complete the solution so that it strips all text that follows\
# any of a set of comment markers passed in. Any whitespace at the
# end of the line should also be stripped out.
#
# Example:
#
# Given an input string of:
#
# apples, pears # and bananas
# grapes
# bananas !apples
#
# The output expected would be:
#
# apples, pears
# grapes
# bananas
#
# The code would be called like so:
#
# result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
# # result should == "apples, pears\ngrapes\nbananas"
import re

b = "apples, pears # and bananas\ngrapes\nbananas !apples"


# print(re.findall(r'#+.*',b))

# filter(re.findall(r'#+.*',b),b)

# def solution(string, markers):
#     import re
#     def res(string):
#         return re.findall(fr'\s?[{markers[0]}|{markers[1]}]+.*', string)
#
#     return string.replace(res(string)[0], '').replace(res(string)[1], '')


def solution(string, markers):
    import re
    def res(string):
        return [re.findall(r'\s?[{0}]+.*'.format(i), string) for i in markers]
    for i in range(len(res(string))):
        string = string.replace(''.join(res(string)[i]), '')
    return string

def solution(string,markers): #simple but working solution
    adding=True
    result=''
    for i in range(len(string)):
        if string[i] not in markers and adding:
            result+=string[i]
        elif string[i] in markers and adding:
            adding=False
            result=result.strip(' ')
        elif string[i:i+1] =='\n':
            result+=string[i]
            adding=True

    return result

def solution(string,markers): #copied solution from Code
    parts = string.split('\n')
    for s in markers:
        parts = [v.split(s)[0].rstrip() for v in parts]
    return '\n'.join(parts)


c="apples, pears # and bananas\ngrapes\navocado @apples"
print(solution(b, ['#', '!']))
# print(solution(c,["@", "!"]))
