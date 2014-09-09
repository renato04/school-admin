// set up ========================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port = 8080											//port that will be listen

app.set('port', (process.env.PORT || port));

app.configure(function() {
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
	});

app.get('*', function(req, res) {
		res.sendfile('./public/empty.html'); // load the single view file 
	});
	
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
	