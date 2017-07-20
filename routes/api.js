var express     = require('express');
var router      = express.Router();
var path        = require('path');

var UserModel   = require('../models/user');

router.get('userlist.htm', function(req, res){
  UserModel.find(function(err, todos){
    if(err)
      res.send(err);

    res.json(todos);
  });
});

module.exports    = router;
