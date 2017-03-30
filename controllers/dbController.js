/*var mongoose = require('mongoose');
//var config = require('../config');
//mongoose.connect(config.getDbConnectionString());
//mongoose.connect('mongodb://test:test@ds141960.mlab.com:41960/adressbook');

var Schema = mongoose.Schema;
        
//schema what should the properties be and what types of data
var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var contactSchema = new Schema({
    name: String,
    email: String,
    msg: String,
    ctry: String
});

//function 'constructor' generate objects
//var Person = mongoose.model('Person', personSchema);
var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

/*var john = Person({
firstname: 'John',
lastname: 'Doe',
address: '555 Main St.'
});

// save the user
john.save(function(err) {
if (err) throw err;

console.log('John is saved!');
});

var jane = Person({
firstname: 'Jane',
lastname: 'Doe',
address: '555 Main St.'
});

// save the user
jane.save(function(err) {
if (err) throw err;

console.log('person saved!');
});*/
*/