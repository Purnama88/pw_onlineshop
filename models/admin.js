var mongoose    = require('mongoose');

var adminschema = new Mongoose.Schema({
  name          : String,
  username      : String,
  password      : String,
  lastmodified  : {type : Date, default : Date.now}
});

module.exports  = mongoose.model('adminschema', adminschema);
