var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true});
var Contact = require('../models/contactModel');

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.render('index');
    });

   /* app.get('/contact', function(req, res) {
        res.render('thanks' , {FName: req.query.firstname, LName: req.query.lastname, Ctry: req.query.country});

	});*/

    app.post('/contact', urlencodedParser, function(req, res) {
       /* res.send('You sent the name "' + req.body.name + '".');*/
        var person = {owner: 'joseph', name: req.body.name, email: req.body.email, msg: req.body.message, ctry: req.body.country}
        res.render('thanks' , person);
        console.log(person);
        var data = Contact(person);

        // save the data
        data.save(function(err) {
        if (err) throw err;

        console.log('Data is saved!');
        });
    
    });
	
};
