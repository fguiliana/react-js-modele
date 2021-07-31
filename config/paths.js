const path = require('path');

module.exports = {
    src: path.resolve(__dirname, '../src'), // source file
    assets: path.resolve(__dirname, '../src/assets'), // assets files
    build: path.resolve(__dirname, '../dist'),
    static: path.resolve(__dirname, '../public')
}