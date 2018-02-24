// call the edamam api to get the recipe and ingredients in a single call

'use strict';


var proteinItem = "";


//Home Menu screen Search Button is clicked
$("#searchBtn").on("click", function() {

    console.log("Search Button was clicked!!!!");
    proteinItem = $("#proteinChoice").val().trim();
    //console.log("Protein Item: " + proteinItem);
    //ingredientListToText(itemToSearch);
    console.log("Document URL: " + document.URL);

    // Clear absolutely everything stored in localStorage using localStorage.clear()
    localStorage.clear();

    // Store the username into localStorage using "localStorage.setItem"
    localStorage.setItem("proteinItem", proteinItem);

    console.log("ProteinItem: " + localStorage.getItem("proteinItem"));

    window.location = "/results";

});