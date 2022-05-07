const router = require("express").Router();
const { User, Post, Description, Search } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/employer", (req, res) => {
  req.session.employerLoggedIn
      ?  res.render("employer")
      : res.redirect('/login')
});
router.get("/consultant", (req, res) => {
  req.session.consultantLoggedIn
      ?  res.render("consultant")
      : res.redirect('/login')
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render("login");
});

// router.get("/register", (req, res) => {
//   // put res.render line here
// });

// router.get("/home", (req, res) => {
//   // put res.render line here
// });

module.exports = router;
