const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js', // indica que o arquivo de entrada é o index.js//
        galaxy: './src/galaxy.js'
    },
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}