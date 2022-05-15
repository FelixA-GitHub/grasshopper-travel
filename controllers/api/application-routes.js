const router = require('express').Router();
const { Job, User, Application } = require('../../models');

// GET all api/applications/
router.get('/', async (req, res) => {
    console.log('======================');
    await Application.findAll()
        .then(dbApplicationData => res.json(dbApplicationData))
        .catch(err => {
            console.logL(err);
            res.status(500).json(err);
        });
});

// GET single /api/application by id
router.get('/:id', (req, res) => {
    Application.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      }
    })
      .then(dbApplicationData => {
        if (!dbApplicationData) {
          res.status(404).json({ message: 'No Application found with this id' });
          return;
        }
        res.json(dbApplicationData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//POST /api/my-apps/
// router.post('/', (req, res) => {
//     User.create({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email,
//       role: req.body.role
//     })
//       .then(dbUserData => {
//         req.session.save(() => {
//           req.session.userId = dbUserData.id;
//           req.session.username = dbUserData.username;
//           req.session.consultant = dbUserData.role === "consultant";
//           req.session.employer = dbUserData.role === "employer";
//           req.session.loggedIn = true;
  
//           res.json(dbUserData);
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// DELETE application by id api/my-apps/:id
router.delete('/:id', (req, res) => {
    Application.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbApplicationData => {
        if (!dbApplicationData) {
          res.status(404).json({ message: 'No Application found with this id' });
          return;
        }
        res.json(dbApplicationData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;