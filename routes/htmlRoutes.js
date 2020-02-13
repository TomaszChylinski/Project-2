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
        options: "Healthy Dining",
        appName: "Health Fit",
      });
    });
  });

//load form page
  app.get("/form", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("form", {
        learn: "Learn More",
        about: "About Us",
        workout: "Workout Tutorials",
        options: "Healthy Dining",
        appName: "Health Fit",
        examples: dbExamples
      });
    });
  });

  //load summary page
 app.get("/summary", function(req, res) {
  db.User.findOne({ limit: 1, order: [["createdAt", "DESC"]] }).then(function(dbUser) {
      res.render("summary", {
        learn: "Learn More",
        about: "About Us",
        workout: "Workout Tutorials",
        options: "Healthy Dining",
        appName: "Health Fit",
        user: dbUser
      });
    });
  }); 

    //load about us
    app.get("/about-us", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.render("about-us", {
          learn: "Learn More",
          about: "About Us",
          workout: "Workout Tutorials",
          options: "Healthy Dining",
          appName: "Health Fit",
        });
      });
    });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404",{
      learn: "Learn More",
      about: "About Us",
      workout: "Workout Tutorials",
      options: "Healthy Dining",
      appName: "Health Fit",
    });
    
  });
};
