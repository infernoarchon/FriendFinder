
var friends = require("../data/friends.js")



module.exports = (function() {
    'use strict';
    var apiRoutes = require('express').Router();

    apiRoutes.get('/api/friends', function (req, res) {
        return res.json(friends)
    });
    apiRoutes.post('/api/friends', function(req, res) {
        var newUser = req.body;
        
        // Add Compatibility Logic
        var matches = []
        var userScores = newUser.scores;
        function Friend (name,photo,matchScore) {
            this.name = name
            this.photo = photo
            this.matchScore = matchScore
        }
        for (var i = 0; i < friends.length; i++) {
            var friendScores = friends[i].scores
            var totalDifference = 0
            for(var j = 0; j < 10; j++) {
                var diff = Math.abs(userScores.map(Number)[j] - friendScores.map(Number)[j])
                totalDifference += diff
            }
            var friend = new Friend(friends[i].name,friends[i].photo,totalDifference)
            matches.push(friend)
        }
        var minscore = Math.min.apply(Math,matches.map(function(o){return o.matchScore;}))

        var obj = matches.find(function(o){ return o.matchScore == minscore; })
        friends.push(newUser);
        console.log(obj)
        res.json(obj)
    }
    )

    return apiRoutes;
})();

