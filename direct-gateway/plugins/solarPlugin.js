var resources = require('./../resources/model');
const isReachable = require('is-reachable');
/*   utils = require('./../../utils/utils.js'); */

var interval, sensor;
var model = resources.rpi.solarpanel;
var pluginName = 'S-V-I-P';     //solar irradiance, Voltage,  Current , Power
var localParams = {'simulate': true, 'frequency': 1000};		//simulate solar data every second

exports.start = function (params) {
  localParams = params;
  if (params.simulate) {
    simulate();
    live();
  } else {
    connectHardware();
  }
};


exports.stop = function (params) {
  if (params.simulate) {
    clearInterval(interval);
  } else {
    sensor.unexport();
  }
  console.info('%s plugin stopped!', pluginName);
};

// function connectHardware(){
//
//  //real hardware plugin and codes has to be implemented here
//
// }

function radiance(low,high){
  var radiance = Math.floor(Math.random() * (high - low + 1) + low);
  return radiance;
};

function voltage() {
  var voltage = (219.5 + Math.random()).toFixed(3);
  return voltage;
};
function current() {
var current = (Math.random()*10).toFixed(3);
return current;
};
function power() {
var power = (voltage() * current() *
(0.6+Math.random()/10)).toFixed(3);
return power;
};
// function live(){
//  isReachable('google.com').then(reachable => {
//     return reachable
//     //=> true
// })};

function live(){
  interval = setInterval(function () {
  isReachable('http://192.168.1.101:8000').then(reachable => {
     model.status.value = reachable;
     //=> true
  })

  require('getmac').getMac(function(err, macAddress){
      if (err)  throw err
      model.mac_address.value = macAddress;
  })
  const now = new Date();
  model.mac_address.timestamp = now;
  status();
},1000*60*5);			// every 5 mins connection status will be updated, True- alive; false : not alive
};

function simulate() {
  interval = setInterval(function () {
    model.solarirradiance.value = radiance(1000,1500)
    model.voltage.value = voltage();
    model.current.value = current();
	  model.power.value = power();

    showValue();
  }, localParams.frequency);
  console.info('Simulated %s sensor started!', pluginName);
};

function showValue() {
  console.log('Solar irradiance : %s w/m2, Voltage: %s V, Current: %s A, Power: %s Watts',
    model.solarirradiance.value,model.voltage.value, model.current.value, model.power.value);
};

function status(){
  console.log('Status is : %s now for SBC having UID %s on %s',model.status.value, model.mac_address.value,model.mac_address.timestamp);

}
