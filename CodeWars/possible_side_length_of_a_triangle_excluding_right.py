#  Your strict math teacher is teaching you about right triangles, and the Pythagorean Theorem --> a^2 + b^2 = c^2 whereas a and b are the legs of the right triangle and c is the hypotenuse of the right triangle. On the test however, the question asks: What are the possible integer lengths for the other side of the triangle, but since you never learned anything about that in class, you realize she meant What are the possible integer lengths for the other side of the right triangle. Because you want to address the fact that she asked the wrong question and the fact that you're smart at math, you've decided to answer all the possible values for the third side EXCLUDING the possibilities for a right triangle in increasing order.
#
# EXAMPLES:
#
# side_len(1, 1) --> [1]
# side_len(3, 4) --> [2, 3, 4, 6]
# side_len(4, 6) -->[3, 4, 5, 6, 7, 8, 9]
#
# RETURN:
#
# Return your answer as a list of all the possoble third side lengths of the triangle without the right triangles in increasing order.
#
# NOTE: When given side_len(x, y), y will always be greater than or equal to x.

def side_len(x, y):
    return [z for z in range(abs(x-y)+1,x+y) if z*z not in (abs(x*x-y*y), x*x+y*y)]
