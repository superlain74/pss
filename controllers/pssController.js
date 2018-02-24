module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

app.get("/home", function(req, res) {
  res.render("home");
});

app.get("/favorites", function(req, res) {
    res.render("favorites");
});


app.get("/mealplan", function(req, res) {
    res.render("mealplan");
});

app.get("/preferences", function(req, res) {
    res.render("preferences");
});

app.get("/results-org", function(req, res) {
    res.render("results-org");
});

app.get("/results", function(req, res) {
    res.render("results");
});

app.get("/team", function(req, res) {
    res.render("team");
});

app.get("/searchResults", function(req, res) {
    res.render("searchResults");
});

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render("home");
  });
};
