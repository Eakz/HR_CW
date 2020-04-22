MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': "'",
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@',
    '...---...': 'SOS'
}


# # def decodeMorse(morse_code):
# #     message=''
# #     morse_code = morse_code.split('   ')
# #     for word in morse_code:
# #         letters=word.split()
# #         for letter in letters:
# #             message+=MORSE_CODE[letter]
# #         if word!=morse_code[-1]:
# #             message+=' '
# #     return message
#
# def decodeBits(bits):
#     decode={'1':'.','':' ','111':'-','11':'.','111111':'-'}
#     return ''.join([decode[i] for i in bits.split('00')])
# #
# #
# # # I know this spelling is terrible, but omfg it fucken works %)
# def decodeMorse(morse_code):
#     return ' '.join([''.join(map(lambda x: MORSE_CODE[x], word.split())) for word in morse_code.split('   ')]).strip(' ')
#
#
# # for i in map(lambda x:MORSE_CODE[x],b.split()):
# #     print(i)
# bits = decodeBits(
#     '11001100110011000000110000001111110011001111110011111100000000'
#     '00000011001111110011111100111111000000110011001111110000001111110011001100000011')
# # print(decodeMorse(bits))
# # print(decodeMorse('.... . -.--   .--- ..- -.. .'))
# # d = '110011001100110000001100000011111100110011111100111111000000000000001100111111' \
# #     '0011111100111111000000110011001111110000001111110011001100000011'
# # splt=d.split('00')
# # # print(splt)
# # decode={'11':'.','':' ','111111':'-'}
# # str1=''.join([decode[i] for i in splt])
# # print(str1)
# # print(decodeMorse(str1))
# # def decodeBits(bits):
# #     decode={'1':'.','':' ','111':'-','11':'.','111111':'-'}
# #     # return ''.join([decode[i] for i in bits.split('00')])
# #     result=''
# #     for i in bits.split('00'):
# #         result+=decode[i]
# #     return result
#
# def decodeBits(bits):
#     result = []
#     word = ''
#     zero_count = 0
#     dicty = {'1': '.', '11': '.', '111': '-', '1111': '-', '11111': '-', '111111': '-', '3spaces': '   ', '1space': ' ',
#              '0space': ''}
#     stripped = bits.strip('0')
#     for d, i in enumerate(stripped):
#         if i == '1' and zero_count == 0:
#             word += i
#         elif i == '1' and 3 > zero_count == 2:
#             zero_count = 0
#             result.append('0space')
#             word += i
#
#         elif i == '1' and 8 > zero_count > 3:
#             result.append('1space')
#             word = ''
#             word += i
#             zero_count = 0
#         elif i == '1' and zero_count > 8:
#             result.append('3spaces')
#             word = ''
#             word += i
#             zero_count = 0
#
#         else:
#             result.append(word) if word != '' else result
#             word = ''
#             zero_count += 1
#     result.append(word)
#     # return result
#     # return ''.join([dicty[i] for i in result])
#     message = ''
#     for i in result:11001100110011
#         message += dicty[i]
#     return message
#
#
# # I know this spelling is terrible, but omfg it fucken works %)
def decodeMorse(morse_code):
    return ' '.join([
        ''.join(map(lambda x: MORSE_CODE[x], word.split()))
        for word in morse_code.split('   ')
    ]).strip(' ')
    # for word in morse_code.split('   ')


#
#
# bits = decodeBits(
#     '11001100110011000000110000001111110011001111110011111100000000'
#     '00000011001111110011111100111111000000110011001111110000001111110011001100000011')
# # print(bits)
# # print(decodeMorse(bits))
# #
# # print(decodeMorse('.... . -.--   .--- ..- -.. .'))
#
#
#
# def decodeBits(bits):
#     result = []
#     word = ''
#     zero_count = 0
#     dicty = {'1': '.', '11': '.', '111': '-', '1111': '-', '11111': '-', '111111': '-', '3spaces': '   ', '1space': ' ',
#              '0space': ''}
#     stripped = bits.strip('0')
#     print(stripped)
#
#     for d, i in enumerate(stripped):
#         if i == '1' and zero_count == 0:
#             word += i
#
#         elif i == '1' and 4 > zero_count >=2:
#             zero_count = 0
#             result.append('0space')
#             word += i
#
#         elif i == '1' and 8 > zero_count > 2:
#             result.append('1space')
#             word = ''
#             word += i
#             zero_count = 0
#         elif i == '1' and zero_count > 8:
#             result.append('3spaces')
#             word = ''
#             word += i
#             zero_count = 0
#
#         else:
#             result.append(word) if word != '' else result
#             word = ''
#             zero_count += 1
#     word+=i if (word =='' and d+1==len(stripped)) else ''
#     result.append(word)
#     return result
#     message = ''
#     # for i in result:
#     #     message += dicty.get(i,'')
#     # return message
#
# def decodeMorse(morse_code):
#     message=''
#     morse_code = morse_code.split('   ')
#     for word in morse_code:
#         letters=word.split()
#         for letter in letters:
#             message+=MORSE_CODE[letter]
#         if word!=morse_code[-1]:
#             message+=' '
#     return message
#
#
# bits = decodeBits(
#     '11001100110011000000110000001111110011001111110011111100000000'
#     '00000011001111110011111100111111000000110011001111110000001111110011001100000011')
# # bits=decodeBits('101')
# bits=decodeBits('0001110001010101000100000001110111010111000101011100010100011101011101000111')
#                 # '010111000000011101010100010111010001110111011100010111011100011101000000010101110100')
#                 # '01110111011100011101010111000000010111011101110001010111000111011100010111011101000101010'
#                 # '00000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110'
#                 # '001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110')
# # print(bits)
# print(bits)
# # print(decodeMorse(bits))
