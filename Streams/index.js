const Streams = require('stream')

const readableStream = new Streams.Readable({
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++))
        if(this.currentCharCode > 90){
            this.push(null);
        }
    }
})

readableStream.currentCharCode = 1;
readableStream.pipe(process.stdout)