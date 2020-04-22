# In this kata you have to write a Morse code decoder for wired electrical
# telegraph.

# Electric telegraph is operated on a 2-wire line with a key that, when pressed,
# connects the wires together, which can be detected on a remote station.
# The Morse code encodes every character being transmitted as a sequence of
# "dots" (short presses on the key) and "dashes" (long presses on the key).

# When transmitting the Morse code, the international standard specifies that:

#     "Dot" – is 1 time unit long.
#     "Dash" – is 3 time units long.
#     Pause between dots and dashes in a character – is 1 time unit long.
#     Pause between characters inside a word – is 3 time units long.
#     Pause between words – is 7 time units long.

# However, the standard does not specify how long that "time unit" is. And in
# fact different operators would transmit at different speed. An amateur person
# may need a few seconds to transmit a single character, a skilled professional
# can transmit 60 words per minute, and robotic transmitters may go way faster.

# For this kata we assume the message receiving is performed automatically by the
# hardware that checks the line periodically, and if the line is connected (the key
# at the remote station is down), 1 is recorded, and if the line is not connected
# (remote key is up), 0 is recorded. After the message is fully received, it gets
# to you for decoding as a string containing only symbols 0 and 1.

# For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be
# received as follows:

# 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111
# 100111111000000110011001111110000001111110011001100000011

# As you may see, this transmission is perfectly accurate according to the standard,
# and the hardware sampled the line exactly two times per "dot".

# That said, your task is to implement two functions:

#     Function decodeBits(bits), that should find out the transmission rate of the message,
#     correctly decode the message to dots ., dashes - and spaces (one between characters,
#     three between words) and return those as a string. Note that some extra 0's may naturally
#     occur at the beginning and the end of a message, make sure to ignore them. Also if
#     you have trouble discerning if the particular sequence of 1's is a dot or a dash,
#     assume it's a dot.

# 2. Function decodeMorse(morseCode), that would take the output of the previous function
# and return a human-readable string.

# NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

# The Morse code table is preloaded for you (see the solution setup, to get its identifier
# in your language).

# All the test strings would be valid to the point that they could be reliably decoded
# as described above, so you may skip checking for errors and exceptions, just do your
# best in figuring out what the message is!

MORSE_CODE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z',

    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',

    '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!',
    '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':',
    '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_',
    '.-..-.': '"', '...-..-': '$', '.--.-.': '@',

    '...---...': 'SOS'
}


def decodeMorse(morse_code):
    return ' '.join(
        [''.join([MORSE_CODE[letter] for letter in word.split(' ')])
         for word in morse_code.strip().split('   ')])

def decodeBits(bits):
    """
    """
    from re import compile

    TOKENIZER = compile('(0+)')

    class Cluster(object):
        def __init__(self, center, weight, mn, mx):
            self.center = center
            self.weight = weight
            self.mn = mn
            self.mx = mx

    bits = bits.strip('0')
    if not bits:
        return ''
    tokens = TOKENIZER.split(bits.strip('0'))
    lengths = sorted(len(token) for token in tokens)
    (minLen, maxLen) = (lengths[0], lengths[-1])
    lenRange = float(maxLen - minLen)
    # Employ 3-means clustering
    clusters = tuple(Cluster(minLen + lenRange * x / 8, 0, maxLen, minLen) for x in (1, 3, 7))
    for sample in lengths:
        # Find the closest cluster for this sample
        cluster = min(clusters, key=lambda cluster: abs(sample - cluster.center))
        # Adjust cluster: each sample has weight of 1, cluster center is adjusted,
        # its weight increases
        cluster.center = (cluster.center * cluster.weight + sample) / (cluster.weight + 1)
        cluster.weight += 1
        if sample < cluster.mn:
            cluster.mn = sample
        if sample > cluster.mx:
            cluster.mx = sample
    # Fill the gaps if we really have less than 3 clusters
    clusters = [cluster for cluster in clusters if cluster.weight]  # Filter out empty clusters
    if len(clusters) == 2:
        # If 1 and 7 are present while 3 is not, add a syntetic cluster for 3
        if float(clusters[1].mn) / clusters[0].mx >= 5:
            clusters.insert(1, Cluster(
                (clusters[0].mx + clusters[1].mn) / 2.0, 0, clusters[0].mx + 1, clusters[1].mn - 1))
    if len(clusters) < 3:  # If only 1 is present (or only 1 and 3 are), add syntetic clusters for 3 and 7 (or just 7)
        limit = clusters[-1].mx + 1
        clusters.extend(Cluster(limit, 0, limit, limit) for i in range(3 - len(clusters)))
    # Calculating edges between dots and dashes, and dashes and word pauses
    maxDot = (clusters[0].mx + clusters[1].mn) / 2.0
    maxDash = (clusters[1].mx + clusters[2].mn) / 2.0
    # Perform transcoding
    ret = []
    for token in tokens:
        if token[0] == '1':
            ret.append('.' if len(token) <= maxDot else '-')
        elif len(token) > maxDot:
            ret.append(' ' if len(token) <= maxDash else '   ')
    return ''.join(ret)
