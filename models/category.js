var mongoose    = require('mongoose');

var categoryschema =  new mongoose.Schema({
  name      : String,
  note      : String,
  lastmodified  : {type : Date, default : Date.now}
}
//, {collection : 'user'}
);

module.exports  = mongoose.model('category', categoryschema);
