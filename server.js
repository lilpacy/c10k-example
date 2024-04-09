const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});
server.maxConnections = 1000;

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
