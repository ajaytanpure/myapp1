var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("I am here");  
	
	request('https://raw.githubusercontent.com/Abhijith-Nagaraja/all-countries-and-cities-json/master/countries.json', function(err, res, body) {  
    	console.log(body);
	});

});

module.exports = router;
