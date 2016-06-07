'use strict';

require('babel-register');
require('babel-polyfill');

var app = require('../src/server');
var config = require('../src/config')[app.env];

app.listen(config.port, err => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
    console.log('\tHOST: %s', config.host);
    console.log('\tPORT: %s', config.port);
  }
});
