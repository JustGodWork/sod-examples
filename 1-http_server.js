const http = require('node:http');

const server = http.createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(3000, () => {
    console.log('API started on port 3000');
});
