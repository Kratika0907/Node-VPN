const net = require('net');

net.createServer(function(stream) {
    stream.pipe(net.connect(5000)).pipe(stream);
}).listen(5002)