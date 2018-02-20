// call the edamam api to get the recipe and ingredients in a single call

'use strict';

var ingredientString = "";

var apiKey = {
    googleCloudVision: "AIzaSyCF2DVvnz6sI81_a2Jkt890y8na5IdFfwc",
    food2Fork: "c103ba7d0a1fa27872bc2e2a6a224ae9",
    mashApe: "QM5kNr6mfnmshHGr87kiK2ME43fmp1UMzZGjsnyXlkLPSHi067",
    edamam: "0bf0054e1ebadc962acaf708f06780de"
}

var apiURL = {
    googleCloudVision: "https://vision.googleapis.com/v1/images:annotate?key=" + apiKey.googleCloudVision,
    searchByIngredients: "https://community-food2fork.p.mashape.com/search?key=" + apiKey.food2Fork + "&q=",
    searchByRecipeID: "https://community-food2fork.p.mashape.com/get?key=" + apiKey.food2Fork + "&rId=",
    searchByProtein: "https://api.edamam.com/search?q="
}

var proteinItem = "";
var ingredientList = [];
var recipeList = [];
var loadImageIndex = 1;
var cardTemplate = Handlebars.compile($("#card-template").html());
//*****var picTemplate = Handlebars.compile($("#pic-template").html());

//Home Menu screen Searh Button is clicked
$("#searchBtn").on("click", function() {

    console.log("Search Button was clicked!!!!");
    proteinItem = $("#proteinChoice").val().trim();
    console.log("Protein Item: " + proteinItem);
    //ingredientListToText(itemToSearch);

    recipesToFind();
});



function buildRecipeCards(cardsPerRow) {

    $("#recipe-cards").append($("<div>").addClass("row").attr("id", "currentRow"));

    console.log("RecipeList: " + recipeList);

    for (var i = 0; i < recipeList.length; i++) {

        $("#currentRow").append(cardTemplate(recipeList[i]));

        if (i % cardsPerRow == (cardsPerRow - 1)) {
            $("#currentRow").removeAttr("id");
            $("#recipe-cards").append($("<div>").addClass("row").attr("id", "currentRow"));
        }
    }


} //buildRecipeCards(cardsPerRow)



function recipesToFind() {
    //Handler for button onclick event

    //$("#text-bar").html("Top Recipes Containing: " + ingredientListToText());
    //callFood2ForkAPI();
    callEdamamAPI();
    //getIngredientsByRecipeId();

}


function callFood2ForkAPI() {

    //var protein = ingredientListToText();
    //console.log("Protein: " + protein);

    $.ajax({ // async call to food2fork api to search by ingredients
        url: apiURL.searchByIngredients + proteinItem, //+ encodeIngredientListForURL(),
        method: "GET",
        headers: {
            'X-Mashape-Key': apiKey.mashApe,
            'Accept': 'application/json'
        }
    }).done( // callback function

        function(searchByIngredientResults) {

            console.log("searchByIngredientResults: " + searchByIngredientResults);

            var returnedRecipes = JSON.parse(searchByIngredientResults).recipes // array of json recipe objects

            console.log("ReturnedRecipes: " + returnedRecipes);

            recipeList = [];
            if (returnedRecipes.length > 0) {
                returnedRecipes.forEach(function(recipeObj) { // loop through returned recipe objects from food2fork

                    recipeList.push(recipeObj);

                }); // end for each
            } // end if

            $("#recipe-cards").empty();
            buildRecipeCards(1);

        }); // end call back function

} // end callFood2ForkAPI function


function getIngredientsByRecipeId() {

    $.ajax({ // async call to food2fork api to search by ingredients  recipeid=28924
        url: apiURL.searchByRecipeID + "47303", //+ encodeIngredientListForURL(),
        method: "GET",
        headers: {
            'X-Mashape-Key': apiKey.mashApe,
            'Accept': 'application/json'
        }
    }).done( // callback function

        function(searchByRecipeId) {

            console.log("searchByRecipeId: " + searchByRecipeId);

            var returnedIngredients = JSON.parse(searchByRecipeId).recipe.ingredients; // array of json recipe objects

            console.log("ReturnedIngredients: " + returnedIngredients);

            // ingredientList = [];
            //if (returnedIngredients.length > 0) {
            //    returnedIngredients.forEach(function(ingredientObj) { // loop through returned recipe objects from food2fork

            //        ingredientList.push(ingredientObj);
            //        console.log("Ingredient: " + ingredientObj);

            //    }); // end for each
            //} // end if

            //****$("#recipe-cards").empty();
            //****buildRecipeCards(3);

        }); // end call back function





}



function callEdamamAPI() {

    //console.log("SearchByProteinString: " + apiURL.searchByProtein);

    $.ajax({ // async call to edamamAPI api to search by ingredients
        url: apiURL.searchByProtein + proteinItem + "&app_id=9db7838c&app_key=" + apiKey.edamam,
        method: "GET"
            //headers: {
            //'X-Mashape-Key': apiKey.mashApe,
            //    'Accept': 'application/json'
            // }
    }).done( // callback function

        function(searchByProteinResults) {

            console.log("SearchByIngredientResults: " + searchByProteinResults);
            //console.log("Length: " + searchByIngredientResults.length());

            var returnedRecipes = searchByProteinResults.hits; // array of json recipe objects
            //var returnedRecipes = JSON.parse(searchByProteinResults).hits // array of json recipe objects

            console.log("ReturnedRecipes: " + returnedRecipes);


            //const { returnedRecipes } = JSON.parse(searchByProteinResults);
            //console.log(returnedRecipes);
            //res.send(returnedRecipes);

            var recipesLength = returnedRecipes.length;


            recipeList = [];
            if (returnedRecipes.length > 0) {
                returnedRecipes.forEach(function(recipeObj) { // loop through returned recipe objects from food2fork

                    recipeList.push(recipeObj);

                }); // end for each
            } // end if

            $("#recipe-cards").empty();
            buildRecipeCards(1);

        }); // end call back function


}

function clear() {
    alert("A selection was made....");
}


function encodeIngredientListForURL() { // parse ingredientList array into URL string for search

    var encodeString = "";
    for (var i = 0; i < ingredientList.length; i++)
        for (var j = 0; j < ingredientList[i].length; j++)
            encodeString += encodeURIComponent(ingredientList[i][j]) + ",";
    console.log("encodeString: " + encodeString);

    return encodeString.slice(0, -1);
} // end encodeIngredientListForURL function


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}