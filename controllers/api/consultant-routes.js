const router = require('express').Router();
const { Consultant } = require('../../models');

//GET all /api/consultant/
router.get('/', (req, res) => {
  Consultant.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbConsultantData => res.json(dbConsultantData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET single consultant /api/consultant/:id

//POST /api/consultant/
router.post('/', (req, res) => {
  Consultant.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbConsultantData => {
      req.session.save(() => {
        req.session.consultantId = dbConsultantData.id;
        req.session.username = dbConsultantData.username;
        req.session.loggedIn = true;

        res.json(dbConsultantData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/consultant/login
router.post('/login', (req, res) => {
  Consultant.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(dbConsultantData => {
    if (!dbConsultantData) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = dbConsultantData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.consultantId = dbConsultantData.id;
      req.session.username = dbConsultantData.username;
      req.session.loggedIn = true;

      res.json({ user: dbConsultantData, message: 'You are now logged in!' });
    });
  });
});

// log out route
// POST /api/consultant/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res
        .status(204)
        .json({ message: 'You are now logged out!' })
        .end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
