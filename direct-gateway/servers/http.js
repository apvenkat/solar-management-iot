// Demo version
var express = require('express'),
  solarRoutes = require('./../routes/solar'),
  resources = require('./../resources/model'),
  cors = require('cors'),
  bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/pi/solar', solarRoutes);

app.get('/pi', function (req, res) {
  res.send('This is a Solar Simulator!')
});

module.exports = app;
