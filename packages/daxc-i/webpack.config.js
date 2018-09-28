const path = require('path');

module.exports = {
  entry: './dst/compose.identity.access.js',
  output: {
    filename: 'daxc-i.js',
    path: path.resolve(__dirname, 'dist')
  }
};
