// set up ======================================================================
var express = require('express')
var app = express()
var port = process.env.PORT || 8080 				// set the port
var env = app.settings.env
var compression = require('compression')

app.use(compression())
app.use(express.static('./dist'))

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
