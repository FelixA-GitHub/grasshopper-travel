// const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const { Post, Employer, Comment} = require('../../models');
// const withAuth = require('../../utils/auth');

// // get all posts for employer
// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('======================');
//   Employer.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'id',
//       'title',
//       'description',
//       'created_at'
     
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: Employer,
//           attributes: ['username']
//         }
//       },
//       {
//         model: Employer,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('employer', { posts, employerloggedIn: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'title',
//       'description',
//       'created_at'
     
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: Employer,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
        
//         res.render('edit-post', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// module.exports = router;

const router = require('express').Router();
const { Employer } = require('../../models');

//GET all /api/Employer/
router.get('/', (req, res) => {
  Employer.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbEmployerData => res.json(dbEmployerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET single Employer /api/Employer/:id

//POST /api/Employer/
router.post('/', (req, res) => {
  Employer.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbEmployerData => {
      req.session.save(() => {
        req.session.employerId = dbEmployerData.id;
        req.session.username = dbEmployerData.username;
        req.session.loggedIn = true;

        res.json(dbEmployerData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/Employer/login
router.post('/login', (req, res) => {
  Employer.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(dbEmployerData => {
    if (!dbEmployerData) {
      res.status(400).json({ message: 'No employer account found!' });
      return;
    }

    const validPassword = dbEmployerData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.employerId = dbEmployerData.id;
      req.session.username = dbEmployerData.username;
      req.session.loggedIn = true;

      res.json({ user: dbEmployerData, message: 'You are now logged in!' });
    });
  });
});

// log out route
// POST /api/Employer/logout
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
