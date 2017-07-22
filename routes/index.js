var express   = require('express');
var router    = express.Router();
var path      = require('path');


router.get('/index.htm', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/detail.htm', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/detail.html'));
});

module.exports  = router;
