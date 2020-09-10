
const crypto = require('crypto');
const net = require('net');

console.log('client')
    const algorithm = 'aes-192-cbc';
    const password = 'Password used to generate key';
    const key = crypto.scryptSync(password, 'salt', 24);
    const iv = Buffer.alloc(16,0);
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    const cipher = crypto.createCipheriv(algorithm,key,iv);
    var stream = net.connect(5005,'localhost')
    process.stdin
    .pipe(cipher)
    .pipe(stream)
    .pipe(decipher)
    .pipe(process.stdout)
