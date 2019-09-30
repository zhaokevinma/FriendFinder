// load data
var friendsData = require("../data/friends");

// api routes
module.exports = function(app) {

  // get
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // post
  app.post("/api/friends", function(req, res) {

    // push to data/friend.js
    friendsData.push(req.body);

    // diff array
    var diffArray = [];
    
    // loop through data and push diff into diff array
    for (let i = 0; i < friendsData.length - 1; i++) {
      var diff = 0;
      for (let j = 0; j < friendsData[i].scores.length; j++) {
        if (friendsData[i].scores[j] < friendsData[friendsData.length-1].scores[j]) {
          diff += friendsData[friendsData.length-1].scores[j] - friendsData[i].scores[j];
        } else {
          diff += friendsData[i].scores[j] - friendsData[friendsData.length-1].scores[j];
        }
      }
      diffArray.push(diff);
    }

    var indexOfMin = diffArray.indexOf(Math.min(diffArray));

    res.json(friendsData[indexOfMin]);
  });

};