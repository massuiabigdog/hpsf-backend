'use strict';

const path = require('path');

module.exports = {
  fsRoot: path.resolve('./test-fiiiiles'),
  rootName: 'Customization area',
  readOnly: false,
  port: process.env.PORT || '5000',
  host: process.env.HOST || 'localhost'
};
