// set up ========================
var express  = require('express');
var app      = express(); 								// create our app w/ express

var mongoose = require('mongoose'); 					// mongoose for mongodb
var morgan = require('morgan'); 			// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var port = 8080											//port that will be listen



app.set('port', (process.env.PORT || port));

mongoose.connect('mongodb://rramosna:rramosna@ds052827.mongolab.com:52827/student'); 	// connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var Student = mongoose.model('Student', {
		name : String,
		address : String,
		city : String,
		state : String,
		email : String,
		password : String
	},
	'students');


// routes ======================================================================

	// api ---------------------------------------------------------------------
	// get all students
	app.get('/api/students', function(req, res) {

		// use mongoose to get all students in the database
		Student.find(function(err, students) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(students); // return all students in JSON format
		});
	});

	// create student and send back all students after creation
	app.post('/api/students', function(req, res) {

		// create a student, information comes from AJAX request from Angular
		Student.create({
			name : req.body.name,
			address : req.body.address,
			city : req.body.city,
			state : req.body.state,
			email : req.body.email,
			password : req.body.password,
		}, function(err, student) {
			if (err)
				res.send(err);

			res.json(student);
		});

	});

	// delete a student
	app.delete('/api/students/:student_id', function(req, res) {
		Student.remove({
			_id : req.params.student_id
		}, function(err, student) {
			if (err)
				res.send(err);

			res.json(student);
		});
	});


app.get('*', function(req, res) {
		res.sendfile('./public/empty.html'); // load the single view file 
	});
	
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
