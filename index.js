var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');

var indexRouter = require('./routers/index');
var config = require('./config/default');
var Util = require('./lib/Util');

app.set('views', path.join(__dirname, 'public/template'));
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    var nodeSSPI = require('node-sspi');
    var nodeSSPIObj = new nodeSSPI({
        retrieveGroups: true
    });
    nodeSSPIObj.authenticate(req, res, function(err){
        res.finished || next();
    });
});

app.use(bodyParser.json());
app.use('/', indexRouter);


server.listen(config.port, function () {
    console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});