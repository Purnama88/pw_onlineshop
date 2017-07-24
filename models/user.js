var mongoose    = require('mongoose');

var userschema =  new mongoose.Schema({
  name          : String,
  username      : String,
  password      : String,
  address       : String,
  phonenumber   : String,
  email         : String,
  note          : String,
  lastmodified  : {type : Date, default : Date.now}
}
//, {collection : 'user'}
);

module.exports  = mongoose.model('user', userschema);
