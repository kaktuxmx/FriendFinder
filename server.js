// Require packages from NPM to use in the APP
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Advising NODE we are seting up a Express Server
const app = express()

// Sets port for the Server.
const PORT = process.env.PORT || 8080;

// sets the body parser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Router

require("./app//apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener for the Server

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});
