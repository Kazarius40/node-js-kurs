// Modules
// const {sayHello} = require("./test/helper");
//
// sayHello();


// Global variables
// __dirname, __filename, process.cwd()
// console.log('dirname', __dirname);
// console.log('filename', __filename);
// console.log('processCwd', process.cwd());
//
// sayHello();

// Path
const path = require('path');
//
// const joinedPath = path.join(__dirname, 'test', 'helper.js');
// console.log(joinedPath);
//
//
// const normalizedPath = path.normalize('////test11\\\\//\\\helper.js');
// console.log(normalizedPath)


// OS
//
// const os = require("os");
// console.log(os.arch());
// console.log(os.cpus());


// FS
const fs = require('fs');
fs.readFile(path.join(__dirname, 'test', 'text.txt'),{encoding: 'utf-8'}, (err, data) => {
    if(err) throw new Error;
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'test', 'text2.txt'), 'Hello World!',  ()=> {
    if(err) throw new Error;
});