const path = require('path');

module.exports = {
  entry: './scripts/main.mjs',
  output: {
    filename: 'es6bundle.js',
    path: path.resolve(__dirname, 'transpiledjs'),
  },
};