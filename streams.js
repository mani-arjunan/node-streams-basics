const Streams = require('stream')

const writableStream = new Streams.Writable({
    write() {},
    
});
const data = 'xyz'
const readableStream = new Streams.Readable({
    read() { }
})
// writableStream._write = ((chunk, encoding, next) => {
//     next()
// })
writableStream.write(data)
writableStream.end()
readableStream.pipe(writableStream);
readableStream.on('readable', (err, data) => {
    console.log(readableStream.read())
})

readableStream.emit('readable')



// // writableStream.write('Hello');


// // // readableStream.pipe(writableStream);

// // // readableStream.push('hi')
// // // readableStream.push('hello')