// imports
const http = require('http'),
	  url = require('url'),
	  util = require('util'),
	  fs = require('fs');



let server = http.createServer(
	function(req, res) {
		if(url.parse(req.url).pathname == '/') {
			res.writeHead(200, {'content-type': 'text/html'});
			var rs = fs.createReadStream('index.html');
			util.pump(rs, res);
		} else {
			res.writeHead(404, {'content-type': 'text/html'});
			var rs = fs.createReadStream('404.html');
			util.pump(rs, res);
	}}
);

server.listen(8080);