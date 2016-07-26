'use strict';

var Promise = require('bluebird');

var express = require('express');
var request = Promise.promisify(require("request"));
Promise.promisifyAll(request);

var app = express();

var api = Promise.coroutine(regeneratorRuntime.mark(function _callee(req, res) {
  var response;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return request('http://www.google.com');

        case 2:
          response = _context.sent;
          _context.next = 5;
          return Promise.delay(1000);

        case 5:
          res.sendStatus(response.statusCode);

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

app.get('/', api);
app.listen(3000, function () {
  return console.log('Listening on 3000..');
});