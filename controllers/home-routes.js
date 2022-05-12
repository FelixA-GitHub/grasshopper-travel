const router = require("express").Router();
const { User } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home", { session : req.session });
});

router.get("/login", (req, res) => {
  res.render("login", { session : req.session });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { session : req.session });
});

router.get("/register", (req, res) => {
  res.render("register", { session : req.session });
});

router.get("/create", (req, res) => {
  res.render("createlisting", { session: req.session });
});

router.get("/job/:id", (req, res) => {
  res.render("viewlisting", { session : req.session });
});

router.get("/application/:id", (req, res) => {
  res.render("application", { session : req.session });
});

router.get("/createdjobs", (req, res) => {
  res.redirect(`/createdjobs/${req.session.userId}`);
});

router.get("/createdjobs/:id", (req, res) => {
  res.render("createdjobs", { session : req.session });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;
