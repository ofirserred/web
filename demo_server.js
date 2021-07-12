var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HopHopTralalaGadaltiBeshanaAhat');
}).listen(5000);
console.log('Server running at http://18.222.17.113:5000/');
