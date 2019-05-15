// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/users", function(req, res) {
//     // 1. Add a join to include all of each Author's Posts
//     db.Author.findAll({}).then(function(dbuser) {
//       res.json(dbuser);
//     });
//   });

//   app.get("/api/users/:id", function(req, res) {
//     // 2; Add a join to include all of the Author's Posts here
//     db.users.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.items],
//     }).then(function(dbusers) {
//       res.json(dbusers);
//     });
//   });

//   app.post("/api/users", function(req, res) {
//     db.user.create(req.body).then(function(dbuser) {
//       res.json(dbuser);
//     });
//   });

//   app.delete("/api/users/:id", function(req, res) {
//     db.user.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbuser) {
//       res.json(dbuser);
//     });
//   });

// };
