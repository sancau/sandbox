'use strict';

var Promise = require('bluebird');

var express= require('express');
var request = Promise.promisify(require("request"));
              Promise.promisifyAll(request);

var app = express();

var api = Promise.coroutine(function* (req, res) {
  let response = yield request('http://www.google.com');
  yield Promise.delay(1000);
  res.sendStatus(response.statusCode);
});

app.get('/', api);
app.listen(3000, () => console.log('Listening on 3000..'));

