var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
<<<<<<< HEAD
    res.render("createItem");
=======
    res.render("index");
>>>>>>> 6250edb273ec0e862e3e1a914d6340b9cb334fb7
    // , {
    //   msg: "Welcome!",
    //   examples: dbExamples
    // });
  });
  // });

  // Load example page and pass in an example by id
  app.get("/login", function(req, res) {
<<<<<<< HEAD
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/login", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/login", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
=======
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("login")
      //  {
      //   example: dbExample
      // });
    // });
  });

  app.get("/register", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("signup")
    //   , {
    //     example: dbExample
    //   });
    // });
  });

  // app.get("/login", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
>>>>>>> 6250edb273ec0e862e3e1a914d6340b9cb334fb7

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
