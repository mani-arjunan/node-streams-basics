const EventEmitter = require('events')

const eventEmitter = new EventEmitter();

eventEmitter.on('something', (...params) => {
    console.log('Emitted ' + params)
})


eventEmitter.emit('something', 'Manikandan', 'ismail')