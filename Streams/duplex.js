const { Duplex } = require('stream')

const duplexStreams = new Duplex({
    write(chunk, encoding, next) {
        console.log(chunk.toString(), '=====');
        next()
    },
    read() {
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            this.push(null)
        }
    }
})

duplexStreams.currentCharCode = 65

process.stdin.pipe(duplexStreams).pipe(duplexStreams)