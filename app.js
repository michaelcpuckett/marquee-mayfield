/**
 * Module dependencies.
 */
 
var express = require('express'),
    http = require('http');
 
/**
 * Express setup
 */
 
var app = express();
 
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.static(__dirname));
});
 
http.createServer(app)
    .listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});