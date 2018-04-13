console.log ("API Route Connected");

// Requiring the FriendMatch var from the file on 
var friendMatch = require('../data/friends.js');

//Create the routs for the api file:

module.exports = function(app) {

    app.get('/api/friends', function (req, res){
        res.json(friendMatch);
    });

    app.post('/api/friends', function (req, res){

        var bestFriend = {
            name: "",
            picture: "",
            friendDif: Infinity
        };

        // User survey results are here:

        var userResult = req.body;
        var userScore = userResult.scores;

        //to calculate diff
        var totalDif = 0;

        for (var i = 0; i < friendMatch.length; i++) {
            var currentFriend = friendMatch[i];
            totalDif = 0;

            console.log(currentFriend.name);

            //now we loop for all scores

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                totalDif += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

                if (totalDif <= bestFriend.friendDif) {
                    bestFriend.name = currentFriend.name;
                    bestFriend.picture = currentFriend.picture;
                    bestFriend.friendDif = totalDif;
                }
            }

            friends.push(userResult);

            res.json(bestFriend);
            });
    };

