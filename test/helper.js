function sayHello() {
    console.log("Hello World!");

    console.log('dirname', __dirname);
    console.log('filename', __filename);
    console.log('processCwd', process.cwd());
}

module.exports = {
    sayHello,
};