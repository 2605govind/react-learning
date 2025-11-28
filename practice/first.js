// const fs = require('fs');

// const readFileStream = fs.createReadStream("largefile.txt", 'utf8');
// const writeFileStream = fs.createWriteStream("output.txt");


// readFileStream.on('data', async (chunk) => {
//     writeFileStream.write(chunk);
//     await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 2000));
//     console.log(chunk)
// })

// readFileStream.on('end', () => {
//     writeFileStream.end();
// })




const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
    console.log("An event occurred");
})


const init = async () => {
    console.log("start")
    await new Promise((resolve, reject) => setTimeout(() => { resolve() }, 2000));
    emitter.emit('event');
}

init()