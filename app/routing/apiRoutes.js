// data
var friends = require("../data/friends");

module.exports = function(app) {
  // get
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // post
  app.post("/api/friends", function(req, res) {
    // test purposes can delete
    console.log(req.body.scores);

    // store request body
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default match index and diff
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    //  easy way to loop and compare but can improve on run-time using other methods
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // update index and diff if condition meets
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // push to data array although this is not needed if no database for storage of info 
    friends.push(user);

    // send back best match as a json -> modal needs for display
    res.json(friends[bestFriendIndex]);
  });
};