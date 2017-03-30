var Contact = require('../models/contactModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended: true }));

    app.get('/api/contacts/:owner', function(req, res) {
    //get that data from database
        //res.json({ firstname: 'John', lastname: 'Doe'});

        Contact.find({ owner: req.params.owner }, 
        function(err, todos) {
            if(err) throw err;

            res.send(todos);
        });
    });

    app.post('/api/person', function(req, res) {
        //save to database
    });

    app.delete('/api/person/:id', function(req, res) {
        //delete person from database
    });
};