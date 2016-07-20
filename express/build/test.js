"use strict";

//////////////////////////////////////////////////////////////////////////////


var Promise = require('bluebird');

function PingPong() {}

PingPong.prototype.ping = Promise.coroutine(regeneratorRuntime.mark(function _callee(val) {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Ping?", val);
          _context.next = 3;
          return Promise.delay(1200);

        case 3:
          this.pong(val + 1);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

PingPong.prototype.pong = Promise.coroutine(regeneratorRuntime.mark(function _callee2(val) {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("Pong!", val);
          _context2.next = 3;
          return Promise.delay(500);

        case 3:
          this.ping(val + 1);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

var a = new PingPong();
a.ping(0);