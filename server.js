const net = require("net");

const handleConnection = socket => {
  socket.on("data", data => {
    socket.write("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!");
    socket.end();
  });
};

const server = net.createServer(handleConnection);
server.maxConnections = 1000;
server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
