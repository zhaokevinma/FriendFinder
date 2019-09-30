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
    friendsData.push(req.body);
  });

};