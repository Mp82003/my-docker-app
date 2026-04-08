const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.end('OK');
  } else {
    res.end('Hello World from Docker!');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});