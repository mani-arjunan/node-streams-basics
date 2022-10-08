const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question('What is your name?', name => {
    console.log('Hi ', name);
    readLine.close()
})

function something(){
    return new Promise(res => res())
}

async function hello(){
    const a = await something()
}
// const a = require('util')