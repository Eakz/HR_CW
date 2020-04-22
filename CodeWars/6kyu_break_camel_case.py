# Complete the solution so that the function will
#  break up camel casing, using a space between words.
# Example

# solution("camelCasing")  ==  "camel Casing"

import re
def solution(s):
    return re.sub(r'([A-Z])',r' \1',s)


print(solution("helloWorld"))  # "hello World")
print(solution("camelCase"))  # "camel Case")
print(solution("breakCamelCase"))  # "break Camel Case")
