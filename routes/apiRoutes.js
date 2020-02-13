var db = require("../models");

module.exports = function(app) {
  //get all forms
  app.get("/api/users", function(req, res) {
    db.User.findAll({limit: 1, order: [["createdAt", "DESC"]] }).then(
      function(dbUsers) {
        res.json(dbUsers);
      }
    );
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });


  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({order: [['createdAt', 'DESC']]}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
