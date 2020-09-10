
const crypto = require('crypto');
const net = require('net');

console.log('vpn server')
net.createServer(function(stream) {
    const algorithm = 'aes-192-cbc';
    const password = 'Password used to generate key';
    const key = crypto.scryptSync(password, 'salt', 24);
    const iv = Buffer.alloc(16,0);
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    const cipher = crypto.createCipheriv(algorithm,key,iv);
    stream.pipe(decipher).pipe(net.connect(5000,'localhost')).pipe(cipher).pipe(stream);
}).listen(5005)