const Stream = require('stream')

const readableStream = new Stream.Readable({
    read() { }
})
const writableStream = new Stream.Writable({
    write() {}
})

// writableStream._write = (chunk, encoding, next) => {
//     console.log(chunk.toString())
//     next()
// }
writableStream.write('Hello')

readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('ho!')

readableStream.on('readable', () => {
    console.log(readableStream.read())
})

readableStream.emit('readable')

