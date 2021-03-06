var util = require('util'),
    http = require('http'),
    argv = require('yargs').argv;

var port = argv.p || argv.port || 8080;

http.createServer(function (req, res) {
  console.log(req.method + ' request: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(JSON.stringify(argv));
  res.end();
}).listen(port);

/* server started */
console.log('> hello world running on port ' + port);

