var db = require("../models");
var axios = require("axios");

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
        examples: dbExamples
      });
    });
  });


  // Load form page 
  app.get("/form", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("form", {
        msg: "Welcome!",
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


  // Load logger page
  app.get("/log", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("log", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

    // Load summary page
    app.get("/summary", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.render("summary", {
          msg: "Welcome!",
          examples: dbExamples
        });
      });
    });

  // Load example page and pass in an example by id
  app.get("/user-page/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });


  // Load about us page
  app.get("/about-us", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("about-us", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/calorie", function(req, res) {
    res.render("calorie-counter")
//     axios.get("https://trackapi.nutritionix.com/v2/search/instant?query=blueberry" , {
//       headers: {
//       "x-app-id": "0e389d93",
//       "x-app-key": '630cb2d7a137cf19d3e3d6c06714b833',
//   }}).then(
 
// // axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//       function(response) {
//     // console.log("The movie's rating is: " + response.data.imdbRating);
//         console.log(JSON.stringify(response.data));
//       })
  
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
