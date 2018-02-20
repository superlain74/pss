module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/favorites", function(req, res) {
    res.render("favorites");
});

app.get("/index", function(req, res) {
    res.render("index");
});

app.get("/mealplan", function(req, res) {
    res.render("mealplan");
});

app.get("/preferences", function(req, res) {
    res.render("preferences");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

app.get("/team", function(req, res) {
    res.render("team");
});


  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render("home");
  });
};
