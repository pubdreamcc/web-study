const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/hello.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hello.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}