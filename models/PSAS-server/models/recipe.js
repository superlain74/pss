var mongoose = require("mongoose");

var recipeSchema;

//schema for adding a recipe to database






var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe