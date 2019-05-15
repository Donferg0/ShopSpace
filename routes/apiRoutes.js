var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/items", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get route for returning items of a specific category
  app.get("/items/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.items
      .findAll({
        where: {
          category: req.params.category
        }
      })
      .then(function(dbitem) {
        res.json(dbitem);
        // console.log(dbitem)
      });
  });
};
