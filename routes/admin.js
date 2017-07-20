var express     = require('express');
var router      = express.Router();
var path        = require('path');

router.get('/userlist.htm', function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'view/admin/userlist.html'));
});

module.exports  = router;
