const http = require('http')

const hostname = '127.0.0.1';
const port = 8087;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('status connected');
});

server.listen(port, hostname, () =>{
    console.log(`server listening on http://${hostname}:${port}`);
});






