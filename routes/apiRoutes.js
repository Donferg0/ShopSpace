var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get route for returning items of a specific category
  app.get("/api/items/category/:category", function(req, res) {
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
        console.log(dbitem)
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // // Create a new item
  // app.post("/api/items", function (req, res) {
  //   // Add sequelize code for creating an item using req.body,
  //   // then return the result using res.json
  //   console.log(req.body);
  //   db.item.create({
  //     name: req.body.name,
  //     price: req.body.price,
  //     image: req.body.image,
  //     quantity: req.body.quantity,
  //     category: req.body.category
  //   })
  //     .then(function (dbitems) {
  //       res.json(dbitems);
  //     })

  // // Get route for retrieving a single item
  // app.get("/api/items/:id", function (req, res) {
  //   // Add sequelize code to find a single post where the id is equal to req.params.id,
  //   // return the result to the user with res.json
  //   db.item.findOne({
  //     where: {
  //       id: req.params.id,
  //     }
  //   }).then(function (dbitem) {
  //     res.json(dbitem);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

// // DELETE route for deleting items
// app.delete("/api/items/:id", function (req, res) {
//   // Add sequelize code to delete a post where the id is equal to req.params.id,
//   // then return the result to the user using res.json
//   db.item.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function (dbitem) {
//     res.json(dbitem);
//   });
// });

// // PUT route for updating posts
// app.put("/api/items", function (req, res) {
//   // Add code here to update a post using the values in req.body, where the id is equal to
//   // req.body.id and return the result to the user using res.json
//   db.item.updateOne({

//     name: req.body.name,
//     price: req.body.price,
//     image: req.body.image,
//     quantity: req.body.quantity,
//     category: req.body.category,

//     where: {
//       id: req.body.id
//     }

//   })
//     .then(function (dbitem) {
//       res.json(dbitem);
//     })
};
