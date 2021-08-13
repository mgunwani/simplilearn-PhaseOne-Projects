// 1. Import `http` module
const http = require('http');

// 2. Create Server and handle incoming requests.
var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Home Page</h2>');
        res.end();
    } else if (req.url == '/user') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>User Portal</h2>');
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Admin Portal</h2>');
        res.end();
    } else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World" }));
        res.end();

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2 styles="color:red;font-weight:bold;">Invalid Request</h2>');
        res.end();
    }
})

// 3. Listen incoming requests on specific available port.
server.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})