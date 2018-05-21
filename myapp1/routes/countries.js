var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	result = {} //to hold the result in callback
	request('https://raw.githubusercontent.com/Abhijith-Nagaraja/all-countries-and-cities-json/master/countries.json', function(err1, res1, body) {  
    	result = body;
    	res.send(result);
	});
});

module.exports = router;
