var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var morgan          = require('morgan');
var methodOverride  = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/pwonlineshop');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

var admin           = require('./routes/admin');
app.use('/admin', admin);

var api             = require('./routes/api');
app.use('/api', api);

var index           = require('./routes/index');
app.use('/', index);

app.listen(8081);
console.log("App listening on port 8081");
