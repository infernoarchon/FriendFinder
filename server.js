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

//Sample Users

var users = [
    {
        name: "Alan",
        photo: "url",
        scores: [
            5,
            4,
            3,
            2,
            3,
            5,
            1,
            2,
            4,
            1
        ]
    }
]

//Routes
var htmlRoutes = require('./app/routing/htmlRoutes');
app.use(htmlRoutes);


//Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
