# Your task, is to create a NxN spiral with a given size.

# For example, spiral with size 5 should look like this:

# 00000
# ....0
# 000.0
# 0...0
# 00000

# and with the size 10:

# 0000000000
# .........0
# 00000000.0
# 0......0.0
# 0.0000.0.0
# 0.0..0.0.0
# 0.0....0.0
# 0.000000.0
# 0........0
# 0000000000

# Return value should contain array of arrays, of 0 and 1,
# for example for given size 5 result should be:

# [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]

# Because of the edge-cases for tiny spirals,
# the size will be at least 5.

# General rule-of-a-thumb is, that the snake made with '1'
# cannot touch to itself.


def spiralize(size):
    
    def on_board(x, y):
        return 0 <= x < size and 0 <= y < size
        
    def is_one(x, y):
        return on_board(x, y) and spiral[y][x] == 1
        
    def can_move():
        return on_board(x+dx, y+dy) and not (is_one(x+2*dx, y+2*dy) or is_one(x+dx-dy, y+dy+dx) or is_one(x+dx+dy, y+dy-dx))
    
    
    spiral = [[0 for x in range(size)] for y in range(size)]   
    x, y = -1, 0
    dx, dy = 1, 0
    turns = 0
    
    while (turns < 2):
        if can_move():
            x += dx
            y += dy
            spiral[y][x] = 1
            turns = 0
        else:
            dx, dy = -dy, dx
            turns += 1
    
    return spiral



print(spiralize(5)) 
                            #   ''' [[1,1,1,1,1],
                            #       [0,0,0,0,1],
                            #       [1,1,1,0,1],
                            #       [1,0,0,0,1],
                            #       [1,1,1,1,1]]) '''
print(spiralize(8))
                            #  ''' [[1,1,1,1,1,1,1,1],
                            #       [0,0,0,0,0,0,0,1],
                            #       [1,1,1,1,1,1,0,1],
                            #       [1,0,0,0,0,1,0,1],
                            #       [1,0,1,0,0,1,0,1],
                            #       [1,0,1,1,1,1,0,1],
                            #       [1,0,0,0,0,0,0,1],
                            #       [1,1,1,1,1,1,1,1]])'''