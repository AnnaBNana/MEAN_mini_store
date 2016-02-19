var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var moment = require('moment');

moment().format();

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(6789, function() {
  console.log('listening on port 6789');
});
