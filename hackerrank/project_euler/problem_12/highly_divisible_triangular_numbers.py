n = int(input())

dividers = {1: 3}
answers = {2: 2, 3: 2}


def calcMinDividers():

    s = 3
    curMaxDiv = 2
    _curDiv = 1
    while(_curDiv < 1000):

        s += 1
        _temps = s
        _curDiv = 1

        for i in range(2, int(s ** 0.5) + 1):
            _countDiv = 0
            while _temps % i == 0:
                _countDiv += 1
                _temps //= i
            _curDiv *= _countDiv + 1

        if _temps != 1:
            _curDiv *= 2

        answers[s] = _curDiv

        if s % 2 == 0:
            _curDiv = answers[s // 2] * answers[s - 1]
        else:
            _curDiv = answers[(s - 1) // 2] * _curDiv

        if _curDiv > curMaxDiv:
            for i in range(curMaxDiv, _curDiv):
                dividers[i] = (s * (s - 1)) // 2
            curMaxDiv = _curDiv


calcMinDividers()

for i in range(n):
    print(dividers[int(input())])
