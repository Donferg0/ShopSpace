var express = require("express");

var router = express.Router();

// Import the model (items.js) to use its database functions.
var peer = require("../models/items.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    items.all(function (data) {
        var hbsObject = {
            peer2peer: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    items.create(["price", "name", "image", "quantity", "category"
    ], [
            req.body.price, req.body.name, req.body.image, req.body.quantity, req.body.category],
        function (result) {
            // Send back the name of the new item
            res.redirect("/");
        });
});

router.put("/:name", function (req, res) {
    var condition = "name = " + req.params.name;

    console.log("condition", condition);

    peer2peer.update(
        {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.body.image,
            category: req.body.category,
            
        }, function () {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
                res.redirect("/");
            }
        });
});

router.delete("/:name", function (req, res) {
    var condition = "name = " + req.params.name;

    items.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
