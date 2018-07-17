// Final version
//responds with json model 
var express = require('express'),
  router = express.Router(),
  resources = require('./../resources/model');


router.route('/').get(function (req, res, next) {
  res.send(resources.rpi.solarpanel);
  next();
});

router.route('/mac').get(function (req, res, next) {
  res.send(resources.rpi.solarpanel.mac_address);
  next();
});

router.route('/radiance').get(function (req, res, next) {
  res.send(resources.rpi.solarpanel.solarirradiance);
  next();
});

router.route('/voltage').get(function (req, res, next) {
  req.send(resources.rpi.solarpanel.voltage);
  next();
});
router.route('/current').get(function (req, res, next) {
  res.send(resources.rpi.solarpanel.current);
  next();
});

router.route('/power').get(function (req, res, next) {
  res.send(resources.rpi.solarpanel.power);
  next();
});

router.route('/status').get(function (req, res, next) {
  res.send(resources.rpi.solarpanel.status);
  next();
});

module.exports = router;
