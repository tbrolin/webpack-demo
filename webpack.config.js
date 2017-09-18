var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  'entry': './src/entry.js',
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': 'webpackdemo.js'
  },
  'devServer': {
    'contentBase': path.resolve(__dirname, 'src'),
    'hot': true,
    'inline': true
  },
  'devtool': 'source-map',
  'plugins': [new HtmlWebpackPlugin({
    'template': 'index.html'
  })]
};
