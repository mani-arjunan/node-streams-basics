const { Transform } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, next) {
        this.push(chunk.toString().toUpperCase())
        next();
    },
})

process.stdin.pipe(transformStream).pipe(process.stdout)