const Stream = require('stream')
let data;

const writableStream = new Stream.Writable({
    write(chunk, encoding, next) {
        console.log(chunk.toString())
        if (chunk.toString().trim() === 'exit') {
            process.exit(1)
        } else {
            data += chunk.toString()
        }
        next();
    }
})

const readableStream = new Stream.Readable({
    read() {}
})

readableStream.push('Hello')
readableStream.push('Hi')
readableStream.pipe(writableStream)

