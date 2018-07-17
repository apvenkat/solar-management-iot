var express = require('express');
var router = express.Router();
var path = require('path');
const request = require('request');
var list = require('./../list.json');
var tableify = require('tableify');


// Home page route.

router.get('/:id',function(req,res){
  var options = { method: 'GET',
    url: list[req.params.id].ip,
    headers:
     { 'postman-token': '08d77e0a-bbcd-f567-0545-34e8c74f6252',
       'cache-control': 'no-cache',
        accept: 'application/json',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: {} };
        request(options, function(err, output, body) {

        var json = JSON.parse(body);
        var html = tableify(json)
        console.log(json); // Logging the output within the request function
        res.send(html) //then returning the response.. The request.json is empty over here
}); //closing the request function

})

module.exports = router;
