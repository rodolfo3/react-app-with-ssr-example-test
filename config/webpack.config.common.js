const webpack = require('webpack');
const path = require('path');

module.exports = {
  plugins: [
    new webpack.DefinePlugin(require('./constants.js')),
  ],
  resolve: {
    alias: require('./alias.js'),
  }
};
