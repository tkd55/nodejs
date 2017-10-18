'use strict'

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
// fs.readFile -> fs.readFileAsync
// fs.writeFile -> fs.writeFileAsync

fs.readFileAsync('input.txt', 'utf8')
.then((text) => {
    const output = text + '\nwrite';
    return fs.writeFileAsync('output.txt', output); 
})
.then(() => {
    return fs.readFileAsync('output.txt', 'utf8');
})
.then((text) => {
    console.log(text);
})
.catch((err) => {
    console.log(err);
});


