var mongoose = require('mongoose');
//var config = require('../config');
//mongoose.connect(config.getDbConnectionString());
//mongoose.connect('mongodb://test:test@ds141960.mlab.com:41960/adressbook');

var Schema = mongoose.Schema;
        
//schema what should the properties be and what types of data
var contactSchema = new Schema({
    owner: String,
    name: String,
    email: String,
    msg: String,
    ctry: String
});

//function 'constructor' generate objects
var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
