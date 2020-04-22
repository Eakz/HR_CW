# Create a simple calculator that given a string of operators
#  (), +, -, *, / and numbers separated by spaces returns the
#  value of that expression
#
# Example:
#
# Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
#
# Remember about the order of operations! Multiplications and
#  divisions have a higher priority and should be performed
#  left-to-right. Additions and subtractions have a lower
#  priority and should also be performed left-to-right.


class Calculator(object):
    def mul(self, a, b):
        return a * b

    def div(self, a, b):
        return a / b

    def sub(self, a, b):
        return a - b

    def add(self, a, b):
        return a + b

    def evaluate(self, string):
        actions = {'*': self.mul, '/': self.div}
        actions2 = {'+': self.add, '-': self.sub}
        lact = string.split()
        first = True
        while len(lact) != 1:
            if len(lact) > 2:
                for i in range(len(lact)):
                    if lact[i] in actions:
                        lact[i] = actions[lact[i]](float(lact[i - 1]),
                                                   float(lact[i + 1]))
                        lact.pop(i + 1)
                        lact.pop(i - 1)
                        break
                else:
                    first = False
                if not first:
                    for i in range(len(lact) - 1):
                        if lact[i] in actions2:
                            lact[i] = actions2[lact[i]](float(lact[i - 1]),
                                                        float(lact[i + 1]))
                            lact.pop(i + 1)
                            lact.pop(i - 1)
                            break
        return float(lact[0])


print(Calculator().evaluate("2 / 2 + 3 * 4 - 6"))  # => 7
print(Calculator().evaluate('2 + 2'))
