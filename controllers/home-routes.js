const router = require("express").Router();
const { User } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  req.session.loggedIn
    ? res.redirect("/dashboard")
    : res.redirect("/login")
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
