import socket


def handle_client(client_socket):
    request = client_socket.recv(1024)
    client_socket.send(
        b"HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!"
    )
    client_socket.close()


server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 8000))
server_socket.listen(1000)

while True:
    client_socket, addr = server_socket.accept()
    handle_client(client_socket)
