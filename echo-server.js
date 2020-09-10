const net = require('net');
console.log('echo server')
net.createServer(function(stream) {
    console.log('I am comming here')
    stream.pipe(stream)
}).listen(5000)