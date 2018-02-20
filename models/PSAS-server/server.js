require("dotenv").config();
var express = require('express');
var app = express();
// var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var authRoutes = require("./routes/auth");
var prefRoutes = require("./routes/preferences");
// var recipeRoutes = require("./routes/recipes");
var db = require("./models");
var cors = require('cors');

//routes go here

console.log(process.env.NAME);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname +'/public'));
// app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res){
    // res.sendFile("index.html");
    res.json({message: "Make a POST request to /api/auth/signup to signup"});
});

//change this to work with our recipe api
// app.use('api/users/:id/preferences')
app.use ('/api/auth', authRoutes);

const PORT = 8081; 
app.listen(PORT, function(){
    console.log(`APP IS RUNNING ON PORT ${PORT}` );
})

