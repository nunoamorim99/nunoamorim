const http = require('http');

const hostname = '192.168.1.84';
const port = 8080;

const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello world')
});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`)
});