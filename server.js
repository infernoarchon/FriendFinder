//Require path and express
//do html routes
//do api/json routes
//create forms with bootstrap and add jquery for DOM
//post functions to create json files
//add app logic to find compatible people
//deploy to heroku

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML Routes
var htmlRoutes = require('./app/routing/htmlRoutes');
app.use(htmlRoutes);

//API Routes
var apiRoutes = require('./app/routing/apiRoutes');
app.use(apiRoutes);

//Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
