import codewars_test as test

def loop(arr):
    while True:
        for i in arr:
            yield i

def magic_music_box(words):
    n = len(words)
    res =[]
    notes = loop(['DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI'])
    words = loop(words)

    for note in notes:
        for _ in range(n):
            word = next(words)
            if word not in res and note in word:
                res.append(word)
                break
        else:
            break
    return res

    

# print(magic_music_box(['DOWN', 'REPTILE', 'AMIDST', 'SOFA']),['DOWN', 'REPTILE', 'AMIDST', 'SOFA'])
# print(magic_music_box(['DOWN', 'PLANE', 'AMIDST', 'REPTILE', 'SOFA', 'SOLAR', 'SILENCE', 'DOWN', 'MARKDOWN']),'\n', ['DOWN', 'REPTILE', 'AMIDST', 'SOFA', 'SOLAR', 'PLANE', 'SILENCE', 'MARKDOWN'])
# print(magic_music_box(['DOOR', 'DOOR', 'REPTILE', 'REPTILE', 'SIMILAR', 'SIMILAR', 'SOFA', 'SOFA', 'DISSOLVED', 'DISSOLVED', 'LAPTOP', 'LAPTOP', 'RESIST', 'RESIST']),'\n', ['DOOR', 'REPTILE', 'SIMILAR', 'SOFA', 'DISSOLVED', 'LAPTOP', 'RESIST'] )
print(magic_music_box(['DOWN', 'AMIDST', 'SOFA', 'FACTION']),'\n', ['DOWN'] )
# sample_test_cases = [
#     ('Simple example',
#      ['DOWN', 'REPTILE', 'AMIDST', 'SOFA'],  # words
#      ['DOWN', 'REPTILE', 'AMIDST', 'SOFA'],  # expected
#     ),
#     ('Example',
#      ['DOWN', 'PLANE', 'AMIDST', 'REPTILE', 'SOFA', 'SOLAR', 'SILENCE', 'DOWN', 'MARKDOWN'], # words
#      ['DOWN', 'REPTILE', 'AMIDST', 'SOFA', 'SOLAR', 'PLANE', 'SILENCE', 'MARKDOWN'],         # expected
#     ),
#     ('Empty',
#      [],  # words
#      [],  # expected
#     ),
# ]

# @test.describe('Sample tests')
# def sample_tests():
#     for name, words, expected in sample_test_cases:
#         @test.it(name)
#         def _():
#             test.assert_equals(magic_music_box(words), expected, f'magic_music_box({words})')