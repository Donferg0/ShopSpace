var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/items", function(req, res) {
    db.items.findAll({}).then(function(dbitems) {
      // res.json(dbitems);
      res.render("products", dbitems);
    });
  });

  // Get route for returning items of a specific category
  app.get("api/buynow", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    var price = req.body.item.price;
    var id = req.body.item.id;
    var purchasedQuantity = req.body.item.quantity;
    var total = price * purchasedQuantity;
    db.items
      .findAll({
        where: {
          id: id
        }
      })
      .then(function(response) {
        var updatedquantity = response.quantity - purchasedQquantity;
        db.items
          .update(
            {
              quantity: updatedquantity
            },
            {
              where: {
                id: id
              }
            }
          )
          .then(function() {
            var hbsObject = {
              total: total
            };
            res.render("checkout", hbsObject);
          });
      });
  });

  app.post("/api/checkouts", function(req, res) {
    // var myCart = (JSON.parse(req.body))
    // console.log(myCart)
    res.render("checkout")  
  })

  // Get route for returning items of a specific category
  app.get("/api/items/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json

    db.items
      .findAll({
        where: {
          category: req.params.category
        }
      })
      .then(function(dbitem) {
        var handlebarObject = {
          product: []
        }
        dbitem.forEach(item => handlebarObject.product.push(item))
        res.render("products", handlebarObject);
      });
  });

  // PUT route for updating posts
  app.put("/api/items", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.item
      .updateOne({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,

        where: {
          id: req.params.id
        }
      })
      .then(function(dbitems) {
        res.json(dbitems);
      });
  });

};
