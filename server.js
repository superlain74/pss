require("dotenv").config()
var express = require('express');
const path = require("path");
var bodyParser = require('body-parser');
const authRoutes = require("./routes/auth");
const PORT = process.env.PORT || 3000; //set the port
var app = express(); //use express js module

const db = require("./models");
const cors = require('cors');

//this is where the code from Annalisa goes
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("client/build"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use('/api/auth', authRoutes);

// Import routes and give the server access to them.
var routes = require("./controllers/pssController.js")(app)
app.get('/', function(req, res){
    // res.sendFile("index.html");
    res.json({message: "Make a POST request to /api/auth/signup to signup"});
});
//app.use("/", routes);


app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });