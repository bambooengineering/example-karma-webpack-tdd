const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, 'spec_helper.js'),
  output: {
    path: resolve(__dirname, 'tmp'),
    filename: 'spec_bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
