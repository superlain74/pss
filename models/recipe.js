var mongoose = require("mongoose");


var recipeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: {
        type: String,
        required: true,
        unique: false
    },
    recipeid: {
        type: String,
        required: false,
        unique: false
    },
    recipe: {
        type: mongoose.Schema.Types.Object,
        required: true
    },
    recipeType: {
        type: { String, required: true, enum: ['MenuPlan', 'Favorites'], default: 'unKnown' },
        required: true,

    }
});

var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;