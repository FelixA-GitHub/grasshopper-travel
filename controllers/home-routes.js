const router = require("express").Router();
const { User } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  // put res.render line here
});

router.get("/home", (req, res) => {
  // put res.render line here
});

module.exports = router;
