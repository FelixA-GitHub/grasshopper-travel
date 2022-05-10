const router = require("express").Router();
const { User } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home", { loggedIn : req.session.loggedIn });
});

router.get("/login", (req, res) => {
  res.render("login", { loggedIn : req.session.loggedIn });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { loggedIn : req.session.loggedIn });
});

module.exports = router;
