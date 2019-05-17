var session = require("express-session");
var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
=======
module.exports = function (app) {
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
  app.use(
    session({
      secret: "keyboard cat"
    })
  );

  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      isAuthenticated: req.session.isAuthenticated || false,
      currentUser: req.session.currentUser || undefined
    });
  });

  app.get("/register", function (req, res) {
    if (req.session.isAuthenticated) {
      res.redirect("/");
    } else {
      res.render("signup");
    }
  });

  app.post("/register", function (req, res) {
    db.User.create({
      email: req.body.email,
      firstName: req.body.first,
      lastName: req.body.last,
      password: req.body.password
    })
      .then(function () {
        res.redirect("/login");
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  app.get("/register", function(req, res) {
    if (req.session.isAuthenticated) {
      res.redirect("/");
    }

    res.render("signup");
  });

  app.post("/register", function(req, res) {
    db.User.create({
      email: req.body.email,
      firstName: req.body.first,
      lastName: req.body.last,
      password: req.body.password
    })
      .then(function(created) {
        res.redirect("/login");
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  // Load example page and pass in an example by id
  app.get("/login", function (req, res) {
    res.render("login");
  });

<<<<<<< HEAD
  app.post("/login", function(req, res) {
=======
  app.post("/login", function (req, res) {
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
<<<<<<< HEAD
      .then(function(found) {
=======
      .then(function (found) {
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
        if (!found) {
          // show error to user
          return;
        }
<<<<<<< HEAD

        req.session.isAuthenticated = true;
        req.session.currentUser = found;

        res.redirect("/");
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/checkout", function(req, res) {
    if (isAuthenticated) {
      res.render("checkout");
    } else {
      res.render("/signup");
    }
    
    app.get("/signup", function(req, res) {
    res.render("signup");
=======
        req.session.isAuthenticated = true;
        var tUser = { isAuthenticated: true, currentUser: found };
        res.render("index", tUser);
      })
      .catch(function (err) {
        console.log(err);
      });
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
  });

  app.get("/checkout", function (req, res) {
    console.log(req.session)
    if (req.session.isAuthenticated) {
      res.render("checkout");
    } else {
      res.render("signup");
    }
  });

      // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
  };
