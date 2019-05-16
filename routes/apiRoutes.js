var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/items", function(req, res) {
    db.item.findAll({}).then(function(dbitems) {
      res.json(dbitems);
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
  // PUT route for updating posts
  app.put("/api/items", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.item
      .updateOne({
        name: req.params.name,
        price: req.params.price,
        category: req.params.category,
        quantity: req.params.quantity,

        where: {
          id: req.params.id
        }
      })
      .then(function(dbitems) {
        res.json(dbitems);
      });
  });
};
