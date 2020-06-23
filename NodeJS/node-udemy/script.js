const fs = require('fs');

//Asynchronous function
fs.readFile('./hello.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Async', data.toString())
    }
})

//synchronous
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

/*
fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if(err){
        console.log(err);
    }
})
*/

fs.writeFile('bye.txt', 'Sad to see u go', err => {
    if(err){
        console.log(err);
    }
})

fs.unlink('./bye.txt', err => {
    if(err){
        console.log(err)
    }
    console.log('Deleted');
})