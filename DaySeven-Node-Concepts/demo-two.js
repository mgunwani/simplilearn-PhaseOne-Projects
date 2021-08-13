// 1. Import `http` module
const http = require('http');

// 2. Create Server and handle incoming requests.
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Hello Folks!!</h2>');
    res.end();
})

// 3. Listen incoming requests on specific available port.
server.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})