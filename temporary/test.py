import sys
from time import sleep
from datetime import datetime

while True:
    print(datetime.now().strftime('%H:%M:%S'), end="", flush=True)
    sleep(1)
    print('\r', end="", flush=True)
    sys.stdout.flush()
