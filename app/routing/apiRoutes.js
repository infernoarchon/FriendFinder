var path = require("path");
var friends = require("../data/friends.js")

module.exports = (function() {
    'use strict';
    var apiRoutes = require('express').Router();

    apiRoutes.get('/api/friends', function (req, res) {
        res.json(friends)
    });

    // apiRoutes.get('/survey', function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/survey.html"));
    // });


    return apiRoutes;
})();