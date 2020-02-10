var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Make a Choice For a Better Tomorrow Today!",
        learn: "Learn More",
        about: "About Us",
        workout: "Workout Tutorials",
        options: "Healthy Dinning",
        appName: "Health Fit",
      });
    });
  });

//load form page
  app.get("/form", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("form", {
        msg: "Make a Choice For a Better Tomorrow Today!",
        learn: "Learn More",
        about: "About Us",
        workout: "Workout Tutorials",
        options: "Healthy Dinning",
        appName: "Health Fit",
        examples: dbExamples
      });
    });
  });

  //load summary page
  app.get("/summary", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("summary", {
        msg: "Make a Choice For a Better Tomorrow Today!",
        learn: "Learn More",
        about: "About Us",
        workout: "Workout Tutorials",
        options: "Healthy Dinning",
        appName: "Health Fit",
        examples: dbExamples
      });
    });
  });


  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
