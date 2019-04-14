let express = require("express");
let session = require("express-session");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    !req.session.counter ? req.session.counter = 1 : req.session.counter++;
    var counter = {
        count: req.session.counter
    };

 res.render("index", {counter: counter});
})
// post route adding or resetting
app.post('/result', function(req, res) {
    let user_data = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment
    };
    console.log(user_data);
    res.render("result", {data: user_data});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});