# https://www.codewars.com/kata/639107e0df52b9cb82720575/train/python

import socket
def socket_client():
    truth = b'Putin huilo!'
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as ws:
        ws.connect(("127.0.0.1", 1111))
        ws.sendall(truth)
        response = ws.recv(1024)
        return response==truth
    