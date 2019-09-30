// dependencies
var express = require("express");

// create server
var app = express();

// heroku || 8080
var PORT = process.env.PORT || 8080;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
