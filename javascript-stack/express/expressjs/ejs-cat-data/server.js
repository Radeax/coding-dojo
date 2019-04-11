// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get("/cats", function (request, response){
  response.render('cats');
})

app.get("/cuddles", function (request, response){
  // hard-coded cat data
  var cat_data = {
      name: "Cuddles",
      favFood: "Spaghetti",
      age: "3",
      sleepingSpots: ["under the bed", "in a sunbeam"]
  };
  response.render('details.ejs', {cat: cat_data});
})

app.get("/fuddles", function (request, response){
  // hard-coded cat data
  var cat_data = {
      name: "Fuddles",
      favFood: "Mice",
      age: "4",
      sleepingSpots: ["on the bed"]
  };
  response.render('details.ejs', {cat: cat_data});
})

app.get("/huddles", function (request, response){
  // hard-coded cat data
  var cat_data = {
      name: "Huddles",
      favFood: "Cat Food",
      age: "5",
      sleepingSpots: ["under the table", "over the roof", "in the sink"]
  };
  response.render('details.ejs', {cat: cat_data});
})