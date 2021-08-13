
/**
 * NodeJS Web Server: To access web pages of any web application, we need a web server.
 * The web server handles all the http or https requests for the web applications.
 * e.g., IIS is a web server for .Net applications.
 *      Tomcat Apache is a web server for Java or PHP applications.
 *      Similiarly, Node creates its own server using `http` module.
 *      This module also handles the incoming requests asynchronously.
 *
 */

// 1. Import `http` module
const http = require('http');

// 2. Create Server and handle incoming requests.
var server = http.createServer(function (req, res) {
    res.write('Hello Everyone!!');
    res.end();
})


// 3. Listen incoming requests on specific available port.
server.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})

