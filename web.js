var express = require('express');
var fs = require('fs');

var oneDay = 86400000;

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public',{maxAge:oneDay}));


app.get('/', function(request, response) {
	var indexFileBuffer = fs.readFileSync('index.html');
	
	response.send(indexFileBuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
