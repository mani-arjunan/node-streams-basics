const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request,'====')
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('First Node JS Program');
})

server.listen(2000)


