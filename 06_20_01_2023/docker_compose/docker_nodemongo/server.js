var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

// Connect to the db

MongoClient.connect("mongodb://mongo:27017/mynewdb", function(err, db) {
 if(!err) {
    console.log("We are connected");
}
else
{   console.log("We are not connected");  }
  
});
app.get('/', function (req, res) {
   res.send('Hello World from Express');
})

var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://"+host+", "+port)
})