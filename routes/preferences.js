var express = require("express");
var router = express.Router({mergeParams: true});
var db = require("../models");
var helpers = require("../helpers/perferences");

router.post('/', helpers.createPreference);


module.exports = router;