// Demo version
var httpServer = require('./servers/http'),
resources = require('./resources/model');

// Internal Plugins
var plugin = require('./plugins/solarPlugin'); //#A

plugin.start({'simulate': true, 'frequency': 1000}); //#B

// HTTP Server
var server = httpServer.listen(resources.rpi.port, function () {
  console.log('HTTP server started...');

  console.info('Your gateway is up and running on port %s', resources.rpi.port);
});
//#A Require all the sensor plugins you need in our case it's solar plugin.
//#B Start them with a parameter object; here you start them on a laptop so you activate the solar simulation function, every second sensor simulates the value
