var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
//var dbController = require('./controllers/dbController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	next();
});

app.use('/contact', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
	//console.log('Response:' + res.body);
});

app.use('/get', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	
	next();
});

htmlController(app);
//dbController();
apiController(app);

app.listen(port, function(){
	console.log('Server running at port ' + port);
});