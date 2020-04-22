# Returns the bank account number parsed from specified string.

#  You work for a bank, which has recently purchased an ingenious
#  machine to assist in reading letters and faxes sent in by branch offices.
#  The machine scans the paper documents, and produces a string with
#  a bank account that looks like this:

#  _     _  _     _  _  _  _  _
# | |  | _| _||_||_ |_   ||_||_|
# |_|  ||_  _|  | _||_|  ||_| _|

#  Each string contains an account number written using pipes and underscores.
#  Each account number should have at least one digit, all of which should be
#  in the range 0-9.

#  Your task is to write a function that can take bank account string and
#  parse it into actual account numbers.

#  @param {string} bankAccount
#  @return {number}

# Examples:

#    '    _  _     _  _  _  _  _ \n'+
#    '  | _| _||_||_ |_   ||_||_|\n'+     => 123456789
#    '  ||_  _|  | _||_|  ||_| _|\n'

#    ' _  _  _  _  _  _  _  _  _ \n'+
#    '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
#    '|_||_  _||_| _||_|  ||_| _|\n',

#    ' _  _  _  _  _  _  _  _  _ \n'+
#    '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
#    '|_||_  _||_| _||_| _||_| _|\n',


def parse_bank_account(bank_account):
    result = {
        ((' ', ' ', ' '), (' ', ' ', ' '), (' ', '|', '|')): 1,
        ((' ', ' ', '|'), ('_', '_', '_'), (' ', '|', ' ')): 2,
        ((' ', ' ', ' '), ('_', '_', '_'), (' ', '|', '|')): 3,
        ((' ', '|', ' '), (' ', '_', ' '), (' ', '|', '|')): 4,
        ((' ', '|', ' '), ('_', '_', '_'), (' ', ' ', '|')): 5,
        ((' ', '|', '|'), ('_', '_', '_'), (' ', ' ', '|')): 6,
        ((' ', ' ', ' '), ('_', ' ', ' '), (' ', '|', '|')): 7,
        ((' ', '|', '|'), ('_', '_', '_'), (' ', '|', '|')): 8,
        ((' ', '|', ' '), ('_', '_', '_'), (' ', '|', '|')): 9,
        ((' ', '|', '|'), ('_', ' ', '_'), (' ', '|', '|')): 0
    }
    a, b, c = bank_account.split('\n')[:-1]
    numbers = list(zip(a, b, c))
    numbers = [(numbers[i], numbers[i + 1], numbers[i + 2])
               for i in range(0, len(numbers), 3)]
    return int(''.join([str(result[i]) for i in numbers]))


# test.describe("'parse_bank_account' Basic Tests")

# test.it("Should pass basic tests")

basic_tests = [{
    "text":
    '    _  _     _  _  _  _  _ \n' + 
    '  | _| _||_||_ |_   ||_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|\n',
    "result":
    123456789
}, {
    "text":
    ' _  _  _  _  _  _  _  _  _ \n' + 
    '| | _| _|| ||_ |_   ||_||_|\n' +
    '|_||_  _||_| _||_|  ||_| _|\n',
    "result":
    23056789,
}, {
    "text":
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_| _| _||_||_ |_ |_||_||_|\n' +
    '|_||_  _||_| _||_| _||_| _|\n',
    "result":
    823856989
}]

# with open('6kyu_pars_bank_account_number.py','a') as f:
#     a,b,c = basic_testss[0]['text'].split('\n')[:-1]
#     zipped = list(zip(a,b,c))
#     count=0
#     result = {}
#     for i in range(0,len(list(zipped)),3):
#         count+=1
#         result[(zipped[i],zipped[i+1],zipped[i+2])]=count

#     f.write(f'result = {result}')

print(parse_bank_account(basic_tests[0]["text"]))
print(basic_tests[0]["result"])
print(parse_bank_account(basic_tests[1]["text"]))
print(basic_tests[1]["result"])
print(parse_bank_account(basic_tests[2]["text"]))
print(basic_tests[2]["result"])
