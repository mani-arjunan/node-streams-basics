const Stream = require('stream')

const readableStream = new Stream.Readable({
    read() { }
})
const writableStream = new Stream.Writable({
    write() { }
})
readableStream.pipe(writableStream)

readableStream.push({})

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString()) // Will Print Hello!
}


// // readableStream.push('hi!')

// readableStream.on('readable', () => {
//     console.log(readableStream.read().toString(), 'READABLE')
// })


// // const Stream = require('stream')

// // const readableStream = new Stream.Readable({
// //     read() { }
// // })
// // const writableStream = new Stream.Writable({
// //     write: (chunk, encoding, next) => {
// //         //       console.log(chunk.toString())
// //         next()
// //     }
// // })

// // // writableStream._write = (chunk, encoding, next) => {
// // //   console.log(chunk.toString())
// // //   next()
// // // }

// // // writableStream.write('EEEEEEE');

// // readableStream.pipe(writableStream)

// // readableStream.push('hi!')
// // readableStream.push('ho!')

// // readableStream.on('readable', () => {
// //     console.log(readableStream.read().toString(), 'FROM READABLE')
// // })


// http.createServer((req, res) => {
//     fs.createReadStream()
// })
// const Streams = require('stream')

// const readableStream = new Streams.Readable({
//     read() { }
// })
// const writableStream = new Streams.Writable({
//     write() { }
// })

// readableStream.push('HI')

// writableStream._write = (chunk) => {
//     console.log(chunk.toString()) // WIll printhello
// }
// readableStream.pipe(writableStream)
