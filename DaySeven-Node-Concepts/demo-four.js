
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile("./data.json", function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(err));
            res.end();
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(JSON.parse(data.toString())));
        res.end();
    })

}).listen(3000, () => {
    console.log('The server is running at port 3000');
});