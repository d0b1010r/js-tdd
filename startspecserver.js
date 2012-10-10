var util = require('util'),
	http = require('http'),
	port = 8000;
	
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Haello!');
	res.end();
}).listen(port);

util.puts('> server started on ' + port);