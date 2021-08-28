var express = require("express");

var router = express.Router();

var mongose = require("mongoose"); 

router.get('/', function (req, res, next) {
 
   // Requiring module
const MongoClient = require("mongodb");
const url = 'mongodb://10.60.1.71:27017/';

// Database name
const databasename = "Touchstone_V3";

MongoClient.connect(url).then((client) => {
const connect = client.db(databasename)
connect.listCollections().toArray(function(err, names) {
	if(!err) {
		console.log(names)
	}
});
}).catch((err) => {

// Printing the error message
console.log(err.Message);
})

     
});
 


module.exports = router;