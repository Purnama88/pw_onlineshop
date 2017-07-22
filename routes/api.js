var express     = require('express');
var router      = express.Router();
var path        = require('path');

var User   = require('../models/user');

router.get('/userlist.htm', function(req, res, next){
  User.find(function(err, userlist){
    if(err) return next(err);
    res.json(userlist);
  });
});

router.post('/adduser.htm', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports    = router;
