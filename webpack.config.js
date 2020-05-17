const path = require('path');

module.exports = {
  entry: './scripts/main.js',
  output: {
    filename: 'es6bundle.js',
    path: path.resolve(__dirname, 'transpiledjs'),
  },
};