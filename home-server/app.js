// var express = require('express');
// var app = express();
// var list = require('./list.json')
// app.set('port', process.env.PORT || 3000);
//
// app.get('/:id',function(req,res){
// res.redirect(list[req.params.id].ip)
//
// });
//
// var server= app.listen(app.get('port'),function(){
//   console.log('Listening on port'+ app.get('port'));
// });
var express = require("express");
var app = express();
var path = require('path');
var gateways =require('./routes/devices')
  // json to html

app.use('/solar/gateway', gateways);
app.use(express.static(__dirname + '/routes'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/views/index.html'));
});
app.listen(8000, function () {
  console.log('Solar API is listening on port 8000!')
})


// app.get("/:id", function(req, res)  {
//
//   var options = { method: 'GET',
//     url: list[req.params.id].ip,
//     headers:
//      { 'postman-token': '08d77e0a-bbcd-f567-0545-34e8c74f6252',
//        'cache-control': 'no-cache',
//         accept: 'application/json',
//        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
//     formData: {} };
//         request(options, function(err, output, body) {
//
//         var json = JSON.parse(body);
//         var html = tableify(json)
//         console.log(html);
//          // Logging the output within the request function
//         res.send(html) //then returning the response.. The request.json is empty over here
// }); //closing the request function
//
// });

// app.listen(3000, function() {
//     console.log("My API is running on port 3000...");
// });
//
// module.exports = app;
