const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },

  watch: true,

  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true
}
}
