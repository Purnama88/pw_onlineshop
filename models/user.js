var mongoose    = require('mongoose');

var userschema =  new mongoose.Schema({
  name      : String,
  username  : String,
  password  : String
}
//, {collection : 'user'}
);

module.exports  = mongoose.model('user', userschema);
