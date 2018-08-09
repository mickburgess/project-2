var db = require("../models");
var dummy = require("../dummydata");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("index");
    });
  });

  app.get("/user/planned", function(req, res) {
    res.render("user", {
      usernav: true,
      userData: dummy.budget.planned
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  //app.get("*", function(req, res) {
  //  res.render("404");
  //});
};
