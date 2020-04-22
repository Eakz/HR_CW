# According to Gary Chapman, marriage counselor and the author of
#  "The Five Love Languages" books, there are five major ways to express
#  our love towards someone: words of affirmation, quality time, gifts,
#  acts of service, and physical touch. These are called the love languages.
#  Usually, everyone has a main language: the one that he/she "speaks"
#  and understands best. In a relationship, it's import to find your
#  partner's main love language, so that you get along better with each other.
# Your task

# Unfortunately, your relationship got worse lately... After a long discussion
#  with your partner, you agreed to give yourself a few weeks to improve it,
#  otherwise you split up...

# You will be given a partner instance, and n weeks. The partner has a
#  .response method, and the responses may be: "positive" or "neutral".
#  You have n * 7 tries (= n weeks) to find the main love language of
#  you partner!

# The love languages are: "words", "acts", "gifts", "time", "touch"
#  (available predefined as LOVE_LANGUAGES)

# Note: your partner may (and will) sometimes give a positive response
#  to any love language ("false positive"), but the main one has a much
#  higher possibility. On the other hand, you may get a neutral response
#  even for the main language, but with a low possibility ("false negative").

# There will be 50 tests. Although it's difficult to fail, in case you get
#  unlucky, just run the tests again. After all, a few weeks may not be enough...
# Examples

# main love language: "words"

# partner.response("words") ==> "positive"
# partner.response("act")   ==> "neutral"
# partner.response("words") ==> "positive"
# partner.response("time")  ==> "neutral"
# partner.response("acts")  ==> "positive"    # false positive
# partner.response("gifts") ==> "neutral"
# partner.response("words") ==> "neutral"     # false negative
# etc.

# Happy coding, and DO try this at home! :-)


def love_language(partner, weeks):
    tries = 7 * weeks
    options = ["words", "acts", "gifts", "time", "touch"]
    marks = {'positive': 1, 'neutral': 0}
    results = {"words": 0, "acts": 0, "gifts": 0, "time": 0, "touch": 0}
    for i in range(tries // 5):
        for o in options:
            response = partner.response(o)
            results[o] += marks[response]
    return max(results.items(), key=lambda x: x[1])[0]


import random


# example class
class TestPartner:
    def __init__(self, main_lang):
        self.main = main_lang

    def response(self, language):
        r = random.random()
        if language == self.main:
            if r < 0.85:
                return 'positive'
            else:
                return 'neutral'
        else:  # language != self.main
            if r < 0.15:
                return 'positive'
            else:
                return 'neutral'


weeks = 6
partner = TestPartner('words')
print(love_language(partner, weeks))  # 'words')

partner = TestPartner('gifts')
print(love_language(partner, weeks))  # 'gifts')
