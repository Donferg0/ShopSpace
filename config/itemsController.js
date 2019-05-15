// var express = require("express");

// var router = express.Router();

// // Import the model (peer2peer.js) to use its database functions.
// var peer = require("../models/items.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//     items.all(function (data) {
//         var hbsObject = {
//             items: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });
// // Add a new item
// router.post("/api/items", function (req, res) {
//     var condition = "id " + req.params.id;
//     console.log("Condition", condition);

//     item.create({
//         price: req.body.price,
//         name: req.body.name,
//         image= req.body.quantity,
//         category= req.body.category
//     }),

//         function () {
//             // Send back the name of the new item
//             res.redirect("/items");
//         };
// });

// // Update the database
// router.put("/api/items/:id", function (req, res) {
//     var condition = "id = " + req.params.name;

//     // console.log("condition", condition);

//     item.update(
//         {
//             name: req.body.name,
//             price: req.body.price,
//             quantity: req.body.quantity,
//             image: req.body.image,
//             category: req.body.category,

//         }, function () {
//             if (result.changedRows == 0) {
//                 // If no rows were changed, then the ID must not exist, so 404
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//                 res.redirect("/");
//             }
//         });
// });

// router.delete("/api/items/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     item.delete(condition, function () {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// // Export routes for server.js to use.
// module.exports = router;
