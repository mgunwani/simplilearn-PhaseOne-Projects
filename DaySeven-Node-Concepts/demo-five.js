
/**
 * HTTP Server to handle GET and POST request.
 */

const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream('./index.html', "UTF-8").pipe(res);
    } else if (req.method == "POST") {
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });
        req.on("end", function () {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(body);
            res.end();
        })

    }
})

server.listen(3000, () => {
    console.log('The server is running at port 3000');
})