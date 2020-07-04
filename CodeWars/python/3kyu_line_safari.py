# https://www.codewars.com/kata/59c5d0b0a25c8c99ca000237/

from itertools import product


def line(board):
    A, B, C, D = lambda x: x < len(
        board) - 1, lambda x: x > 0, lambda x: x < len(board[0]) - 1, lambda x: x > 0
    find_x = [[i, k]
              for i, j in enumerate(board) for k, l in enumerate(j) if l == 'X']

    def doall(i, j):
        li = [(i, j)]
        def ch(x, y, z): return board[x][y] in z and (x, y) not in li
        a, b, c, d = A(i) and ch(i+1, j, '+|X'), B(i) and ch(i-1, j,
                                                             '+|X'), C(j) and ch(i, j+1, '+-X'), D(j) and ch(i, j-1, '+-X')
        if [a, b, c, d].count(1) > 1 or a + b + c + d == 0:
            return False
        direction, dir_, valid = ['D', 'U', 'R', 'L'][[a, b, c, d].index(1)], {'R': (0, 1), 'L': (
            0, -1), 'U': (-1, 0), 'D': (1, 0)}, {'R': '-', 'L': '-', 'U': '|', 'D': '|'}
        while True:
            o, p = dir_[direction]
            i += o
            j += p
            li.append((i, j))
            if board[i][j] == '+':
                if direction in 'RL':
                    a, b = A(i) and ch(
                        i+1, j, '+|X'), B(i) and ch(i-1, j, '+|X')
                    if a+b != 1:
                        return False
                    direction = ['D', 'U'][[a, b].index(1)]
                elif direction in 'UD':
                    a, b = C(j) and ch(
                        i, j+1, '+-X'), D(j) and ch(i, j-1, '+-X')
                    if a+b != 1:
                        return False
                    direction = ['R', 'L'][[a, b].index(1)]
            elif board[i][j] == 'X':
                break
            elif board[i][j] != valid[direction]:
                return False
        r = set(list(product(list(range(len(board))),
                             list(range(len(board[0])))))).difference(li)
        return next((0 for y, n in r if board[y][n] != ' '), 1)
    return next((1 for k in find_x if doall(k[0], k[1])), 0)
