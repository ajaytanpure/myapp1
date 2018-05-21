var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/countries', function(req, res, next) {
  
  res.send("Yo");
});

module.exports = router;
